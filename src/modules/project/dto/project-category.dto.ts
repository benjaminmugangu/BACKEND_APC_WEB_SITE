import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateProjectCategoryDto {
  @IsString()
  @IsNotEmpty({ message: 'Le nom est requis' })
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

export class UpdateProjectCategoryDto {
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
