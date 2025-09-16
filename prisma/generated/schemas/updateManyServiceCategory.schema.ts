import { z } from 'zod';
import { ServiceCategoryUpdateManyMutationInputObjectSchema } from './objects/ServiceCategoryUpdateManyMutationInput.schema';
import { ServiceCategoryWhereInputObjectSchema } from './objects/ServiceCategoryWhereInput.schema';

export const ServiceCategoryUpdateManySchema = z.object({ data: ServiceCategoryUpdateManyMutationInputObjectSchema, where: ServiceCategoryWhereInputObjectSchema.optional()  })