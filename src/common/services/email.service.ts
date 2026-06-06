import { Resend } from 'resend';
import { logger } from '@/config/logger.config';

/**
 * Centralized email notification service using Resend.
 * All notification emails are sent asynchronously and failures
 * are logged but never crash the calling flow.
 */
class EmailService {
  private resend: Resend;
  private from: string;
  private to: string;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY || '');
    this.from = process.env.MAIL_FROM || 'APC <onboarding@resend.dev>';
    this.to = process.env.MAIL_TO || 'coordination.nat@agri-peaceandchild.org';
  }

  /**
   * Send an email notification for a new job application.
   */
  async notifyNewApplication(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    type: string;
    careerTitle?: string;
  }): Promise<void> {
    const typeLabels: Record<string, string> = {
      job: 'Emploi',
      internship: 'Stage',
      volunteer: 'Bénévolat',
      consultant: 'Consultant',
    };

    const subject = `Nouvelle candidature – ${data.firstName} ${data.lastName} (${typeLabels[data.type] || data.type})`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2e7d32;">🆕 Nouvelle Candidature Reçue</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold;">Nom</td><td style="padding: 8px;">${data.firstName} ${data.lastName}</td></tr>
          <tr style="background: #f5f5f5;"><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Téléphone</td><td style="padding: 8px;">${data.phone || 'Non renseigné'}</td></tr>
          <tr style="background: #f5f5f5;"><td style="padding: 8px; font-weight: bold;">Type</td><td style="padding: 8px;">${typeLabels[data.type] || data.type}</td></tr>
          ${data.careerTitle ? `<tr><td style="padding: 8px; font-weight: bold;">Offre</td><td style="padding: 8px;">${data.careerTitle}</td></tr>` : ''}
        </table>
        <p style="color: #666; font-size: 12px; margin-top: 24px;">
          Connectez-vous au tableau de bord APC pour consulter la candidature complète et le CV.
        </p>
      </div>
    `;

    await this.send(subject, html);
  }

  /**
   * Send an email notification for a new tender submission.
   */
  async notifyNewTenderSubmission(data: {
    companyName: string;
    contactName: string;
    email: string;
    phone: string;
    tenderTitle?: string;
    tenderRef?: string;
  }): Promise<void> {
    const subject = `Nouvelle soumission d'offre – ${data.companyName}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1565c0;">📋 Nouvelle Soumission d'Appel d'Offres</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold;">Entreprise</td><td style="padding: 8px;">${data.companyName}</td></tr>
          <tr style="background: #f5f5f5;"><td style="padding: 8px; font-weight: bold;">Contact</td><td style="padding: 8px;">${data.contactName}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr style="background: #f5f5f5;"><td style="padding: 8px; font-weight: bold;">Téléphone</td><td style="padding: 8px;">${data.phone}</td></tr>
          ${data.tenderTitle ? `<tr><td style="padding: 8px; font-weight: bold;">Appel d'offres</td><td style="padding: 8px;">${data.tenderTitle} (${data.tenderRef || 'N/A'})</td></tr>` : ''}
        </table>
        <p style="color: #666; font-size: 12px; margin-top: 24px;">
          Connectez-vous au tableau de bord APC pour consulter les documents soumis.
        </p>
      </div>
    `;

    await this.send(subject, html);
  }

  /**
   * Internal send wrapper – catches errors to avoid crashing the main flow.
   */
  private async send(subject: string, html: string): Promise<void> {
    try {
      const { data, error } = await this.resend.emails.send({
        from: this.from,
        to: [this.to],
        subject,
        html,
      });

      if (error) {
        logger.error('Resend email error:', error);
      } else {
        logger.info(`Email notification sent successfully (id: ${data?.id})`);
      }
    } catch (err) {
      // Never let email failures crash the application flow
      logger.error('Failed to send email notification:', err);
    }
  }
}

// Singleton export
export const emailService = new EmailService();
