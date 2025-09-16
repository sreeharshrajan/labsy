import { z } from 'zod';
import { ServiceSelectObjectSchema } from './objects/ServiceSelect.schema';
import { ServiceIncludeObjectSchema } from './objects/ServiceInclude.schema';
import { ServiceCreateInputObjectSchema } from './objects/ServiceCreateInput.schema';
import { ServiceUncheckedCreateInputObjectSchema } from './objects/ServiceUncheckedCreateInput.schema';

export const ServiceCreateOneSchema = z.object({ select: ServiceSelectObjectSchema.optional(), include: ServiceIncludeObjectSchema.optional(), data: z.union([ServiceCreateInputObjectSchema, ServiceUncheckedCreateInputObjectSchema])  })