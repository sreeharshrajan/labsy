import { z } from 'zod';
import { ServiceSelectObjectSchema } from './objects/ServiceSelect.schema';
import { ServiceCreateManyInputObjectSchema } from './objects/ServiceCreateManyInput.schema';

export const ServiceCreateManyAndReturnSchema = z.object({ select: ServiceSelectObjectSchema.optional(), data: z.union([ ServiceCreateManyInputObjectSchema, z.array(ServiceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()