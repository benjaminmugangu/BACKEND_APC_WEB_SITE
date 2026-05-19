import { IsString, IsNotEmpty, IsEnum, IsOptional, IsArray, IsBoolean, IsDateString, IsNumber, Min, IsUrl, IsInt, ValidateIf } from 'class-validator';
import { Transform } from 'class-transformer';
import { ProjectStatus, ProjectCategory } from '@/entities/project.entity';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty({ message: 'Le titre est requis' })
  title!: string;

  @IsString()
  @IsNotEmpty({ message: 'Le slug est requis' })
  slug!: string;

  @IsString()
  @IsNotEmpty({ message: 'La description est requise' })
  description!: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsEnum(ProjectCategory, { message: 'Catégorie invalide (agriculture, protection, dignite, paix)' })
  @IsNotEmpty({ message: 'La catégorie est requise' })
  category!: ProjectCategory;

  @IsEnum(ProjectStatus, { message: 'Statut invalide (draft, published, archived)' })
  @IsOptional()
  status?: ProjectStatus;

  @IsOptional()
  @IsNumber({}, { message: 'Le budget doit être un nombre' })
  @Min(0, { message: 'Le budget ne peut pas être négatif' })
  @Transform(({ value }) => Number(value))
  budget?: number;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  province?: string;

  @IsOptional()
  @IsInt({ message: 'Le nombre de bénéficiaires doit être un entier' })
  @Min(0, { message: 'Le nombre de bénéficiaires ne peut pas être négatif' })
  @Transform(({ value }) => parseInt(value, 10))
  beneficiaries?: number;

  @IsOptional()
  @IsDateString({}, { message: 'La date de début doit être au format ISO 8601 (YYYY-MM-DD)' })
  startDate?: string;

  @IsOptional()
  @IsDateString({}, { message: 'La date de fin doit être au format ISO 8601 (YYYY-MM-DD)' })
  endDate?: string;

  @IsOptional()
  @ValidateIf(o => o.mainImage !== '' && o.mainImage !== null && o.mainImage !== undefined)
  @IsUrl({}, { message: 'L\'URL de l\'image principale doit être une URL valide' })
  mainImage?: string;

  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true, message: 'Chaque URL de galerie doit être une URL valide' })
  gallery?: string[];

  @IsOptional()
  @IsBoolean()
  featured?: boolean;

  @IsOptional()
  @IsBoolean()
  showOnHome?: boolean;

  @IsOptional()
  @IsBoolean()
  needsDonation?: boolean;

  @IsOptional()
  @IsBoolean()
  isVisible?: boolean;
}

export class UpdateProjectDto {
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() slug?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() content?: string;
  @IsOptional() @IsEnum(ProjectCategory) category?: ProjectCategory;
  @IsOptional() @IsEnum(ProjectStatus) status?: ProjectStatus;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Transform(({ value }) => Number(value))
  budget?: number;

  @IsOptional() @IsString() currency?: string;
  @IsOptional() @IsString() location?: string;
  @IsOptional() @IsString() province?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Transform(({ value }) => parseInt(value, 10))
  beneficiaries?: number;

  @IsOptional() @IsDateString() startDate?: string;
  @IsOptional() @IsDateString() endDate?: string;

  @IsOptional()
  @ValidateIf(o => o.mainImage !== '' && o.mainImage !== null && o.mainImage !== undefined)
  @IsUrl({}, { message: 'L\'URL de l\'image principale doit être une URL valide' })
  mainImage?: string;

  @IsOptional() @IsArray() @IsUrl({}, { each: true }) gallery?: string[];
  @IsOptional() @IsBoolean() featured?: boolean;
  @IsOptional() @IsBoolean() showOnHome?: boolean;
  @IsOptional() @IsBoolean() needsDonation?: boolean;
  @IsOptional() @IsBoolean() isVisible?: boolean;
}
