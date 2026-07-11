import { AppDataSource } from '@/config/database.config';
import { Settings } from '@/entities/settings.entity';
import { UpdateSettingsDto } from './dto/settings.dto';

export class SettingsService {
  private repository = AppDataSource.getRepository(Settings);

  async getSettings() {
    let settings = await this.repository.findOne({ where: { id: 1 } });
    
    const defaults = {
      hero: {
        title: "Agir pour la Dignité humaine et la Paix",
        subtitle: "Organisation non gouvernementale engagée dans la protection de l'enfance, la résolution des conflits et le développement agricole durable en RDC.",
        imageUrl: ""
      },
      stats: {
        beneficiaries: "45 000+",
        projects: "24",
        provinces: "3",
        partners: "12",
        teamMembers: "48"
      },
      contact: {
        address: "Avenue Pacifique, Quartier Les Volcans, Goma, Nord-Kivu, RDC",
        phone1: "+243 971 234 567",
        phone2: "+243 812 345 678",
        whatsapp: "+243 971 234 567",
        email: "contact@apc-agri.org",
        emailSupport: "support@apc-agri.org",
        emailCareers: "recrutement@apc-agri.org",
        socials: {
          facebook: "https://facebook.com/apc-ong",
          linkedin: "https://linkedin.com/company/apc-ong",
          twitter: "https://twitter.com/apc-ong",
          instagram: "https://instagram.com/apc-ong",
          youtube: "https://youtube.com/c/apc-ong"
        }
      },
      institution: {
        name: "Agri-Peace and Child",
        acronym: "APC",
        foundationYear: "2015",
        vision: "Un Congo solidaire, pacifié, où chaque enfant s'épanouit et chaque communauté dispose d'une souveraineté alimentaire durable.",
        mission: "Promouvoir le développement agricole, restaurer la paix locale, et assurer l'éducation, la protection sociale et la dignité des enfants et des femmes en milieu rural."
      },
      seo: {
        metaTitle: "APC - Agri-Peace and Child | Protection, Paix et Développement Agricole",
        metaDescription: "Découvrez l'ONG Agri-Peace and Child (APC). Nous œuvrons pour le développement agricole durable, la consolidation de la paix et la protection de l'enfant en République Démocratique du Congo.",
        metaKeywords: "APC, Agri-Peace and Child, ONG RDC, Goma, développement agricole durable, protection de l'enfant, consolidation de la paix, Congo",
        ogImage: ""
      },
      logo: {
        logoHeader: "https://res.cloudinary.com/ddxgabibh/image/upload/v1783256326/apc-website/dzhctidnsxtrnucfde2z.png",
        logoFooter: "https://res.cloudinary.com/ddxgabibh/image/upload/v1783256326/apc-website/dzhctidnsxtrnucfde2z.png",
        logoDark: "https://res.cloudinary.com/ddxgabibh/image/upload/v1783256326/apc-website/dzhctidnsxtrnucfde2z.png",
        favicon: "https://res.cloudinary.com/ddxgabibh/image/upload/v1783256326/apc-website/dzhctidnsxtrnucfde2z.png"
      },
      supportSection: {
        title: "Chaque action compte dans la reconstruction de notre communauté.",
        subtitle: "Pourquoi nous soutenir ?",
        description: "Depuis notre création, nous avons constaté que l'engagement local couplé au soutien international crée une force imparable. En nous soutenant, vous ne donnez pas seulement, vous investissez dans l'autonomie et la dignité de milliers de familles.",
        imageUrl: "",
        bulletPoints: [
          "Transparence totale des fonds",
          "Impact direct sur le terrain (sans intermédiaire)",
          "Projets ancrés dans les réalités locales"
        ]
      },
      historySection: {
        title: "Une organisation née de la nécessité du terrain",
        subtitle: "Notre Histoire",
        paragraphs: [
          "Fondée en 2015, Agri-Peace and Child (APC) est une Organisation Non Gouvernementale humanitaire dont le siège est établi à Goma, Nord-Kivu, RD Congo.",
          "Face aux crises récurrentes qui frappent l'Est de la RDC, nos fondateurs ont décidé d'agir localement avec une approche intégrée conjuguant agriculture durable, protection sociale et consolidation de la paix.",
          "Aujourd'hui, nous intervenons dans plusieurs provinces de l'Est, touchant plus de 45 000 bénéficiaires directs."
        ],
        imageUrl: "",
        objectives: [
          { label: "Promouvoir l'agriculture durable et la sécurité alimentaire", icon: "Sprout", color: "text-apc-green", bg: "bg-apc-green/10" },
          { label: "Consolider la paix et la cohésion sociale", icon: "Handshake", color: "text-apc-blue", bg: "bg-apc-blue/10" },
          { label: "Protéger et promouvoir les droits des enfants", icon: "ShieldCheck", color: "text-apc-alert", bg: "bg-apc-alert/10" },
          { label: "Autonomiser les femmes et les jeunes", icon: "Users", color: "text-purple-600", bg: "bg-purple-100" },
          { label: "Améliorer l'accès aux services sociaux de base", icon: "Heart", color: "text-rose-600", bg: "bg-rose-100" }
        ]
      },
      engagementSection: {
        title: "Comment vous engager ?",
        subtitle: "Nous croyons fermement que c'est l'addition des volontés locales et internationales qui permet la pérennité de l'action humanitaire. Explorez les opportunités ci-dessous.",
        engagementTypes: [
          { title: "Bénévolat sur le terrain", icon: "HeartHandshake", color: "text-apc-green", bg: "bg-apc-green/10", description: "Appuyez nos équipes dans les distributions, les formations agricoles ou l'animation psychosociale des enfants." },
          { title: "Bénévolat de compétences", icon: "GraduationCap", color: "text-apc-blue", bg: "bg-apc-blue/10", description: "Offrez votre expertise technique : communication, plaidoyer, rédaction de projets subventionnés, etc." },
          { title: "Stage Professionnel", icon: "Users", color: "text-purple-600", bg: "bg-purple-100", description: "Intégrez APC dans le cadre de vos études supérieures pour une expérience pratique en action humanitaire." },
          { title: "Expertise Conseil", icon: "Briefcase", color: "text-apc-alert", bg: "bg-apc-alert/10", description: "Apportez votre regard d'expert sur des missions ponctuelles de monitoring ou d'évaluation d'impact." }
        ],
        reasonsTitle: "Pourquoi APC ?",
        reasons: [
          { title: "Impact Terrain", description: "Nos équipes sont aux premières lignes au Nord-Kivu, Ituri et Tanganyika. Votre expertise sauve des vies." },
          { title: "Expertise Intégrée", description: "Collaborez avec des experts en agronomie, psychosocial et consolidation de la paix." },
          { title: "Culture d'Intégrité", description: "La transparence et le professionnalisme sont les piliers de notre organisation." }
        ]
      },
      donationMessage: "Pour garantir la sécurité et la traçabilité de votre contribution, nous privilégions actuellement les dons par contact direct. Notre équipe est à votre disposition pour vous orienter selon votre mode de paiement préféré.",
      transparencyMessage: {
        title: "Engagement Transparence",
        description: "Agri-Peace and Child s'engage à fournir un reçu officiel pour chaque don reçu. Vos fonds sont directement alloués aux projets terrain de votre choix ou à nos programmes prioritaires en cours."
      },
      legalSection: {
        privacyPolicy: `<div className="flex items-center gap-3 mb-8 p-4 bg-apc-blue/5 rounded-2xl border border-apc-blue/10">
              <ShieldCheck className="text-apc-blue" size={32} />
              <p className="text-sm font-medium text-apc-blue m-0">Dernière mise à jour : Avril 2024</p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">1. Collecte des informations</h2>
            <p className="mb-6">
              Nous recueillons des informations lorsque vous utilisez notre formulaire de contact ou lorsque vous faites un don. Les informations recueillies incluent votre nom, votre adresse e-mail et votre numéro de téléphone.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. Utilisation des informations</h2>
            <p className="mb-6">
              Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
              <ul className="list-disc pl-6 mt-2">
                <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                <li>Améliorer notre site Web</li>
                <li>Améliorer le service client et vos besoins de prise en charge</li>
                <li>Vous contacter par e-mail</li>
              </ul>
            </p>

            <h2 className="text-2xl font-bold mb-4">3. Confidentialité du commerce en ligne</h2>
            <p className="mb-6">
              Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n&apos;importe quelle raison, sans votre consentement.
            </p>

            <h2 className="text-2xl font-bold mb-4">4. Protection des informations</h2>
            <p className="mb-6">
              Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.
            </p>`,
        legalNotices: `<div className="flex items-center gap-3 mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <FileText className="text-gray-400" size={32} />
              <p className="text-sm font-medium text-gray-500 m-0">Conformité aux lois de la République Démocratique du Congo.</p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">1. Présentation de l&apos;Organisation</h2>
            <p className="mb-6">
              Le site web est édité par l&apos;ONG <strong>{institution?.name || 'Agri-Peace and Child'}</strong> ({institution?.acronym || 'APC'}).<br />
              <strong>Siège social :</strong> {contact?.address || 'Goma, Nord-Kivu, RD Congo'}<br />
              <strong>Téléphone :</strong> {contact?.phone1 || ''}<br />
              <strong>Email :</strong> {contact?.email || ''}
            </p>

            <h2 className="text-2xl font-bold mb-4">2. Hébergement</h2>
            <p className="mb-6">
              Le site est hébergé par Vercel Inc., situé au 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
            </p>

            <h2 className="text-2xl font-bold mb-4">3. Propriété Intellectuelle</h2>
            <p className="mb-6">
              L&apos;ensemble de ce site relève de la législation congolaise et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>

            <h2 className="text-2xl font-bold mb-4">4. Limitation de Responsabilité</h2>
            <p className="mb-6">
              {institution?.name || 'Agri-Peace and Child'} s&apos;efforce d&apos;assurer au mieux de ses possibilités l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, l&apos;organisation ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à la disposition sur ce site.
            </p>`
      }
    };

    if (!settings) {
      settings = this.repository.create({ id: 1, ...defaults });
      await this.repository.save(settings);
    } else {
      let modified = false;
      
      if (!settings.hero || settings.hero.title == null) {
        settings.hero = { ...defaults.hero, ...settings.hero };
        modified = true;
      }
      
      if (!settings.stats || settings.stats.partners == null) {
        settings.stats = { ...defaults.stats, ...settings.stats };
        modified = true;
      }
      
      if (!settings.contact || settings.contact.phone1 == null) {
        const oldPhone = (settings.contact as any)?.phone || '';
        settings.contact = { 
          ...defaults.contact, 
          ...settings.contact,
          phone1: settings.contact?.phone1 || oldPhone,
          phone2: settings.contact?.phone2 || ''
        };
        modified = true;
      }
      
      if (!settings.institution) {
        settings.institution = defaults.institution;
        modified = true;
      }
      
      if (!settings.seo) {
        settings.seo = defaults.seo;
        modified = true;
      }
      
      if (!settings.logo || settings.logo.logoHeader == null) {
        settings.logo = defaults.logo;
        modified = true;
      }

      if (!settings.supportSection || settings.supportSection.imageUrl == null) {
        settings.supportSection = { ...defaults.supportSection, ...settings.supportSection };
        modified = true;
      }

      if (!settings.historySection || settings.historySection.imageUrl == null) {
        settings.historySection = { ...defaults.historySection, ...settings.historySection };
        modified = true;
      }

      if (!settings.engagementSection) {
        settings.engagementSection = defaults.engagementSection;
        modified = true;
      }

      if (!settings.legalSection) {
        settings.legalSection = defaults.legalSection;
        modified = true;
      }

      if (!settings.donationMessage) {
        settings.donationMessage = defaults.donationMessage;
        modified = true;
      }

      if (!settings.transparencyMessage) {
        settings.transparencyMessage = defaults.transparencyMessage;
        modified = true;
      }

      if (modified) {
        await this.repository.save(settings);
      }
    }
    
    return settings;
  }

  async updateSettings(data: UpdateSettingsDto) {
    const settings = await this.getSettings();
    
    if (data.hero) {
      settings.hero = { ...settings.hero, ...data.hero };
    }
    if (data.stats) {
      settings.stats = { ...settings.stats, ...data.stats };
    }
    if (data.contact) {
      const existingSocials = settings.contact.socials || {};
      const newSocials = data.contact.socials || {};
      settings.contact = { 
        ...settings.contact, 
        ...data.contact,
        socials: { ...existingSocials, ...newSocials }
      };
    }
    if (data.institution) {
      settings.institution = { ...settings.institution, ...data.institution };
    }
    if (data.seo) {
      settings.seo = { ...settings.seo, ...data.seo };
    }
    if (data.logo) {
      settings.logo = { ...settings.logo, ...data.logo };
    }
    if (data.supportSection) {
      settings.supportSection = { ...settings.supportSection, ...data.supportSection };
    }
    if (data.historySection) {
      settings.historySection = { ...settings.historySection, ...data.historySection };
    }
    if (data.engagementSection) {
      settings.engagementSection = { ...settings.engagementSection, ...data.engagementSection };
    }
    if (data.donationMessage !== undefined) {
      settings.donationMessage = data.donationMessage;
    }
    if (data.transparencyMessage) {
      settings.transparencyMessage = { ...settings.transparencyMessage, ...data.transparencyMessage };
    }
    if (data.legalSection) {
      settings.legalSection = { ...settings.legalSection, ...data.legalSection };
    }

    return await this.repository.save(settings);
  }
}
