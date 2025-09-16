import { z } from 'zod';
import { ServiceCategorySelectObjectSchema } from './objects/ServiceCategorySelect.schema';
import { ServiceCategoryCreateManyInputObjectSchema } from './objects/ServiceCategoryCreateManyInput.schema';

export const ServiceCategoryCreateManyAndReturnSchema = z.object({ select: ServiceCategorySelectObjectSchema.optional(), data: z.union([ ServiceCategoryCreateManyInputObjectSchema, z.array(ServiceCategoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()