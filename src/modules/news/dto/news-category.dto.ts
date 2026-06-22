import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateNewsCategoryDto {
  @IsString()
  @IsNotEmpty({ message: 'Le nom de la catégorie est requis' })
  name!: string;

  @IsString()
  @IsNotEmpty({ message: 'Le slug est requis' })
  slug!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateNewsCategoryDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
