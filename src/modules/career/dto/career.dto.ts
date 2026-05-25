import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsDateString, IsEnum } from 'class-validator';
import { CareerType, CareerStatus } from '@/entities/career.entity';

export class CreateCareerDto {
  @IsString()
  @IsNotEmpty({ message: 'Le titre est requis' })
  title!: string;

  @IsString()
  @IsNotEmpty({ message: 'La description est requise' })
  description!: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsString()
  requirements?: string;

  @IsOptional()
  @IsEnum(CareerType, { message: 'Type de contrat invalide' })
  type?: CareerType;

  @IsOptional()
  @IsEnum(CareerStatus, { message: 'Statut invalide' })
  status?: CareerStatus;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsDateString()
  deadline?: string;

  @IsOptional()
  @IsBoolean()
  isOpen?: boolean;
}

export class UpdateCareerDto {
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() content?: string;
  @IsOptional() @IsString() requirements?: string;
  @IsOptional() @IsEnum(CareerType) type?: CareerType;
  @IsOptional() @IsEnum(CareerStatus) status?: CareerStatus;
  @IsOptional() @IsString() location?: string;
  @IsOptional() @IsDateString() deadline?: string;
  @IsOptional() @IsBoolean() isOpen?: boolean;
}
