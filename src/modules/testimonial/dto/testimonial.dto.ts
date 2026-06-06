import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber } from 'class-validator';
import { TestimonialStatus } from '@/entities/testimonial.entity';

export class CreateTestimonialDto {
  @IsString()
  @IsNotEmpty({ message: 'Le nom du bénéficiaire est requis' })
  authorName!: string;

  @IsOptional()
  @IsString()
  authorRole?: string;

  @IsOptional()
  @IsString()
  authorLocation?: string;

  @IsOptional()
  @IsString()
  photoUrl?: string;

  @IsString()
  @IsNotEmpty({ message: 'Le contenu du témoignage est requis' })
  content!: string;

  @IsOptional()
  @IsString()
  projectName?: string;

  @IsOptional()
  @IsEnum(TestimonialStatus)
  status?: TestimonialStatus;

  @IsOptional()
  @IsNumber()
  order?: number;
}

export class UpdateTestimonialDto {
  @IsOptional() @IsString() authorName?: string;
  @IsOptional() @IsString() authorRole?: string;
  @IsOptional() @IsString() authorLocation?: string;
  @IsOptional() @IsString() photoUrl?: string;
  @IsOptional() @IsString() content?: string;
  @IsOptional() @IsString() projectName?: string;
  @IsOptional() @IsEnum(TestimonialStatus) status?: TestimonialStatus;
  @IsOptional() @IsNumber() order?: number;
}
