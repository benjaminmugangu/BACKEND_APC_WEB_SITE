import { AppDataSource } from '../config/database.config';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();
const seedAdmin = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Base de données connectée...');
        const userRepository = AppDataSource.getRepository(User);
        const adminEmail = 'admin@apc-agri.org';
        const existingAdmin = await userRepository.findOneBy({ email: adminEmail });
        if (existingAdmin) {
            console.log('Un administrateur ADMIN avec cet email existe déjà.');
            // On continue pour vérifier/créer le compte ADMIN_RH
        }
        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash('Admin@2026!', 10);
            const admin = userRepository.create({
                firstName: 'Admin',
                lastName: 'APC',
                email: adminEmail,
                password: hashedPassword,
                role: UserRole.ADMIN,
                isActive: true,
            });
            await userRepository.save(admin);
            console.log('--------------------------------------------------');
            console.log('✅ Compte Administrateur ADMIN créé avec succès !');
            console.log(`Email : ${adminEmail}`);
            console.log('Mot de passe : Admin@2026!');
            console.log('--------------------------------------------------');
        }
        // Création du compte ADMIN_RH
        const rhEmail = 'rh@apc-agri.org';
        const existingRH = await userRepository.findOneBy({ email: rhEmail });
        if (!existingRH) {
            const hashedRHPassword = await bcrypt.hash('RH@2026!', 10);
            const adminRH = userRepository.create({
                firstName: 'Admin',
                lastName: 'RH',
                email: rhEmail,
                password: hashedRHPassword,
                role: UserRole.ADMIN_RH,
                isActive: true,
            });
            await userRepository.save(adminRH);
            console.log('--------------------------------------------------');
            console.log('✅ Compte Administrateur RH créé avec succès !');
            console.log(`Email : ${rhEmail}`);
            console.log('Mot de passe : RH@2026!');
            console.log('--------------------------------------------------');
        }
        else {
            console.log('Un compte ADMIN_RH existe déjà.');
        }
        process.exit(0);
    }
    catch (error) {
        console.error('Erreur lors du seeding :', error);
        process.exit(1);
    }
};
seedAdmin();
