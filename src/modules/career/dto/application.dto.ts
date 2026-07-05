import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateApplicationDto {
  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  type?: string;

  @IsUUID('4')
  @IsOptional()
  careerTypeId?: string;

  @IsString()
  @IsOptional()
  motivation?: string;

  @IsUUID()
  @IsOptional()
  careerId?: string;
}
