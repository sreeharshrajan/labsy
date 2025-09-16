import { z } from 'zod';
import { ServiceCategoryWhereInputObjectSchema } from './objects/ServiceCategoryWhereInput.schema';

export const ServiceCategoryDeleteManySchema = z.object({ where: ServiceCategoryWhereInputObjectSchema.optional()  })