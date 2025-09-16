import { z } from 'zod';
import { ServiceCategorySelectObjectSchema } from './objects/ServiceCategorySelect.schema';
import { ServiceCategoryUpdateManyMutationInputObjectSchema } from './objects/ServiceCategoryUpdateManyMutationInput.schema';
import { ServiceCategoryWhereInputObjectSchema } from './objects/ServiceCategoryWhereInput.schema';

export const ServiceCategoryUpdateManyAndReturnSchema = z.object({ select: ServiceCategorySelectObjectSchema.optional(), data: ServiceCategoryUpdateManyMutationInputObjectSchema, where: ServiceCategoryWhereInputObjectSchema.optional()  }).strict()