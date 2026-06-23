import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreatePartnerCategoryDto:
 *       type: object
 *       required:
 *         - name
 *         - slug
 *       properties:
 *         name:
 *           type: string
 *         slug:
 *           type: string
 *         description:
 *           type: string
 *         isActive:
 *           type: boolean
 */
export class CreatePartnerCategoryDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  slug!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdatePartnerCategoryDto:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         slug:
 *           type: string
 *         description:
 *           type: string
 *         isActive:
 *           type: boolean
 */
export class UpdatePartnerCategoryDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  slug?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
