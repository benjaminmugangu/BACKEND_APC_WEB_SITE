import { IsString, IsNotEmpty, IsOptional, IsUrl, IsBoolean, IsNumber, IsEmail, ValidateIf } from 'class-validator';

export class CreatePartnerDto {
  @IsString()
  @IsNotEmpty({ message: 'Le nom est requis' })
  name!: string;

  @IsString()
  @IsOptional()
  categoryId?: string;

  @IsOptional()
  @IsString()
  logoUrl?: string;

  @IsOptional()
  @ValidateIf(o => o.websiteUrl !== '' && o.websiteUrl !== null && o.websiteUrl !== undefined)
  @IsUrl({}, { message: 'URL du site web invalide (doit commencer par https://)' })
  websiteUrl?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  contactName?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email de contact invalide' })
  contactEmail?: string;

  @IsOptional()
  @IsString()
  contactPhone?: string;

  @IsOptional()
  @IsNumber({}, { message: 'Le montant du financement doit être un nombre' })
  totalFunding?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdatePartnerDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsString() categoryId?: string;
  @IsOptional() @IsString() logoUrl?: string;
  @IsOptional()
  @ValidateIf(o => o.websiteUrl !== '' && o.websiteUrl !== null && o.websiteUrl !== undefined)
  @IsUrl({}, { message: 'URL du site web invalide' })
  websiteUrl?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() contactName?: string;
  @IsOptional() @IsEmail({}, { message: 'Email de contact invalide' }) contactEmail?: string;
  @IsOptional() @IsString() contactPhone?: string;
  @IsOptional() @IsNumber() totalFunding?: number;
  @IsOptional() @IsBoolean() isActive?: boolean;
}
