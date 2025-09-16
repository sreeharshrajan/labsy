import { z } from 'zod';
import { ServiceCategoryCreateManyInputObjectSchema } from './objects/ServiceCategoryCreateManyInput.schema';

export const ServiceCategoryCreateManySchema = z.object({ data: z.union([ ServiceCategoryCreateManyInputObjectSchema, z.array(ServiceCategoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })