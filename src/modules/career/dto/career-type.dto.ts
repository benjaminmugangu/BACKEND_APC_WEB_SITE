import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber } from 'class-validator';

export class CreateCareerTypeDto {
  @IsString()
  @IsNotEmpty({ message: 'Le nom du type est requis' })
  name!: string;

  @IsOptional()
  @IsString()
  nameEn?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsNumber()
  order?: number;
}

export class UpdateCareerTypeDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsString() nameEn?: string;
  @IsOptional() @IsBoolean() isActive?: boolean;
  @IsOptional() @IsNumber() order?: number;
}
