import { AppDataSource } from '@/config/database.config';
import { Project, ProjectStatus } from '@/entities/project.entity';
import { News, NewsStatus } from '@/entities/news.entity';
import { Career } from '@/entities/career.entity';
import { TeamMember } from '@/entities/team-member.entity';
import { Message, MessageStatus } from '@/entities/message.entity';
import { Tender } from '@/entities/tender.entity';
import { Service } from '@/entities/service.entity';
import { UserRole } from '@/common/enums/role.enum';
export class DashboardService {
    projectRepo = AppDataSource.getRepository(Project);
    newsRepo = AppDataSource.getRepository(News);
    careerRepo = AppDataSource.getRepository(Career);
    teamRepo = AppDataSource.getRepository(TeamMember);
    messageRepo = AppDataSource.getRepository(Message);
    tenderRepo = AppDataSource.getRepository(Tender);
    serviceRepo = AppDataSource.getRepository(Service);
    async getStats(role) {
        // ─── Stats communes aux deux rôles ───────────────────────────────────────
        const [totalCareers, activeCareers, totalTeam, totalTenders, activeTenders,] = await Promise.all([
            this.careerRepo.count(),
            this.careerRepo.count({ where: { status: 'OPEN' } }),
            this.teamRepo.count(),
            this.tenderRepo.count(),
            this.tenderRepo.count({ where: { status: 'open' } }),
        ]);
        const rhStats = {
            emplois: {
                total: totalCareers,
                actifs: activeCareers,
                label: "Offres d'Emploi",
                href: '/admin/emplois',
            },
            equipe: {
                total: totalTeam,
                label: 'Experts / Équipe',
                href: '/admin/equipe',
            },
            appels: {
                total: totalTenders,
                actifs: activeTenders,
                label: "Appels d'Offres",
                href: '/admin/appels-d-offres',
            },
        };
        // Admin RH : retourner uniquement les stats RH
        if (role === UserRole.ADMIN_RH) {
            return { role, ...rhStats };
        }
        // ─── Stats réservées à l'Admin Technique ─────────────────────────────────
        const [totalProjects, publishedProjects, totalNews, publishedNews, unreadMessages, totalMessages, totalServices,] = await Promise.all([
            this.projectRepo.count(),
            this.projectRepo.count({ where: { status: ProjectStatus.PUBLISHED } }),
            this.newsRepo.count(),
            this.newsRepo.count({ where: { status: NewsStatus.PUBLISHED } }),
            this.messageRepo.count({ where: { status: MessageStatus.UNREAD } }),
            this.messageRepo.count(),
            this.serviceRepo.count(),
        ]);
        return {
            role,
            // Stats Admin Tech
            projets: {
                total: totalProjects,
                publies: publishedProjects,
                label: 'Réalisations',
                href: '/admin/projets',
            },
            actualites: {
                total: totalNews,
                publiees: publishedNews,
                label: 'Actualités',
                href: '/admin/actualites',
            },
            messages: {
                total: totalMessages,
                nonLus: unreadMessages,
                label: 'Messages',
                href: '/admin/messages',
            },
            services: {
                total: totalServices,
                label: 'Nos Services',
                href: '/admin/services',
            },
            // Stats RH également disponibles pour l'Admin Tech
            ...rhStats,
        };
    }
}
