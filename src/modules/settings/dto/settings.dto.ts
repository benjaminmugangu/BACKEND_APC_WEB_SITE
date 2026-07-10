import { IsString, IsOptional, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class HeroSettingsDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  subtitle?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}

class StatsSettingsDto {
  @IsString()
  @IsOptional()
  beneficiaries?: string;

  @IsString()
  @IsOptional()
  projects?: string;

  @IsString()
  @IsOptional()
  provinces?: string;

  @IsString()
  @IsOptional()
  partners?: string;

  @IsString()
  @IsOptional()
  teamMembers?: string;
}

class ContactSocialsDto {
  @IsString() @IsOptional() facebook?: string;
  @IsString() @IsOptional() twitter?: string;
  @IsString() @IsOptional() linkedin?: string;
  @IsString() @IsOptional() instagram?: string;
  @IsString() @IsOptional() youtube?: string;
}

class ContactSettingsDto {
  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  phone1?: string;

  @IsString()
  @IsOptional()
  phone2?: string;

  @IsString()
  @IsOptional()
  whatsapp?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  emailSupport?: string;

  @IsString()
  @IsOptional()
  emailCareers?: string;

  @IsObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => ContactSocialsDto)
  socials?: ContactSocialsDto;
}

class InstitutionSettingsDto {
  @IsString() @IsOptional() name?: string;
  @IsString() @IsOptional() acronym?: string;
  @IsString() @IsOptional() foundationYear?: string;
  @IsString() @IsOptional() vision?: string;
  @IsString() @IsOptional() mission?: string;
}

class SeoSettingsDto {
  @IsString() @IsOptional() metaTitle?: string;
  @IsString() @IsOptional() metaDescription?: string;
  @IsString() @IsOptional() metaKeywords?: string;
  @IsString() @IsOptional() ogImage?: string;
}

class LogoSettingsDto {
  @IsString() @IsOptional() logoHeader?: string;
  @IsString() @IsOptional() logoFooter?: string;
  @IsString() @IsOptional() logoDark?: string;
  @IsString() @IsOptional() favicon?: string;
}

class LegalSectionDto {
  @IsString() @IsOptional() privacyPolicy?: string;
  @IsString() @IsOptional() legalNotices?: string;
}

export class UpdateSettingsDto {
  @IsObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => HeroSettingsDto)
  hero?: HeroSettingsDto;

  @IsObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => StatsSettingsDto)
  stats?: StatsSettingsDto;

  @IsObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => ContactSettingsDto)
  contact?: ContactSettingsDto;

  @IsObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => InstitutionSettingsDto)
  institution?: InstitutionSettingsDto;

  @IsObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => SeoSettingsDto)
  seo?: SeoSettingsDto;

  @IsObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => LogoSettingsDto)
  logo?: LogoSettingsDto;

  @IsObject()
  @IsOptional()
  supportSection?: any;

  @IsObject()
  @IsOptional()
  historySection?: any;

  @IsObject()
  @IsOptional()
  engagementSection?: any;

  @IsString()
  @IsOptional()
  donationMessage?: string;

  @IsObject()
  @IsOptional()
  transparencyMessage?: any;

  @IsObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => LegalSectionDto)
  legalSection?: LegalSectionDto;
}
