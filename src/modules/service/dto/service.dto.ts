import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber, IsArray, IsObject, IsUrl, MaxLength, ValidateIf } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty({ message: 'Le nom est requis' })
  @MaxLength(100, { message: 'Le nom ne doit pas dépasser 100 caractères' })
  name!: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  titleEn?: string;

  @IsString()
  @IsNotEmpty({ message: 'Le slug est requis' })
  @MaxLength(100)
  slug!: string;

  @IsString()
  @IsNotEmpty({ message: 'La description est requise' })
  description!: string;

  @IsOptional()
  @IsString()
  descriptionEn?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  iconName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  bgClass?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  accentClass?: string;

  @IsOptional()
  @ValidateIf(o => o.mainImage !== '' && o.mainImage !== null && o.mainImage !== undefined)
  @IsUrl({}, { message: 'L\'image principale doit être une URL valide' })
  mainImage?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  actions?: string[];

  @IsOptional()
  @IsArray()
  @IsObject({ each: true })
  stats?: { value: string; label: string }[];

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsNumber()
  order?: number;
}

export class UpdateServiceDto {
  @IsOptional() @IsString() @MaxLength(100) name?: string;
  @IsOptional() @IsString() @MaxLength(100) titleEn?: string;
  @IsOptional() @IsString() @MaxLength(100) slug?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() descriptionEn?: string;
  @IsOptional() @IsString() @MaxLength(50) iconName?: string;
  @IsOptional() @IsString() @MaxLength(50) bgClass?: string;
  @IsOptional() @IsString() @MaxLength(50) accentClass?: string;
  @IsOptional()
  @ValidateIf(o => o.mainImage !== '' && o.mainImage !== null && o.mainImage !== undefined)
  @IsUrl()
  mainImage?: string;
  @IsOptional() @IsArray() @IsString({ each: true }) actions?: string[];
  @IsOptional() @IsArray() @IsObject({ each: true }) stats?: { value: string; label: string }[];
  @IsOptional() @IsBoolean() isActive?: boolean;
  @IsOptional() @IsNumber() order?: number;
}
