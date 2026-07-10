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
        logoHeader: "https://res.cloudinary.com/ddxgabibh/image/upload/v1779170149/apc-website/apc_logo_branding.png",
        logoFooter: "https://res.cloudinary.com/ddxgabibh/image/upload/v1779170149/apc-website/apc_logo_branding.png",
        logoDark: "https://res.cloudinary.com/ddxgabibh/image/upload/v1779170149/apc-website/apc_logo_branding.png",
        favicon: "https://res.cloudinary.com/ddxgabibh/image/upload/v1779170149/apc-website/apc_logo_branding.png"
      },
      supportSection: {
        title: "Chaque action compte dans la reconstruction de notre communauté.",
        subtitle: "Pourquoi nous soutenir ?",
        description: "Depuis notre création, nous avons constaté que l'engagement local couplé au soutien international crée une force imparable. En nous soutenant, vous ne donnez pas seulement, vous investissez dans l'autonomie et la dignité de milliers de familles.",
        imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
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
        imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
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

      if (!settings.supportSection) {
        settings.supportSection = defaults.supportSection;
        modified = true;
      }

      if (!settings.historySection) {
        settings.historySection = defaults.historySection;
        modified = true;
      }

      if (!settings.engagementSection) {
        settings.engagementSection = defaults.engagementSection;
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

    return await this.repository.save(settings);
  }
}
