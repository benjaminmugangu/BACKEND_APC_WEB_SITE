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
        logoHeader: "",
        logoFooter: "",
        logoDark: "",
        favicon: ""
      }
    };

    if (!settings) {
      settings = this.repository.create({ id: 1, ...defaults });
      await this.repository.save(settings);
    } else {
      let modified = false;
      
      if (!settings.hero || !settings.hero.title) {
        settings.hero = { ...defaults.hero, ...settings.hero };
        modified = true;
      }
      
      if (!settings.stats || !settings.stats.partners) {
        settings.stats = { ...defaults.stats, ...settings.stats };
        modified = true;
      }
      
      if (!settings.contact || !settings.contact.phone1) {
        const oldPhone = (settings.contact as any)?.phone || '';
        settings.contact = { 
          ...defaults.contact, 
          ...settings.contact,
          phone1: oldPhone || defaults.contact.phone1
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
      
      if (!settings.logo) {
        settings.logo = defaults.logo;
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

    return await this.repository.save(settings);
  }
}
