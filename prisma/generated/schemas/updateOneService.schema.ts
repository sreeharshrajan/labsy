import { z } from 'zod';
import { ServiceSelectObjectSchema } from './objects/ServiceSelect.schema';
import { ServiceIncludeObjectSchema } from './objects/ServiceInclude.schema';
import { ServiceUpdateInputObjectSchema } from './objects/ServiceUpdateInput.schema';
import { ServiceUncheckedUpdateInputObjectSchema } from './objects/ServiceUncheckedUpdateInput.schema';
import { ServiceWhereUniqueInputObjectSchema } from './objects/ServiceWhereUniqueInput.schema';

export const ServiceUpdateOneSchema = z.object({ select: ServiceSelectObjectSchema.optional(), include: ServiceIncludeObjectSchema.optional(), data: z.union([ServiceUpdateInputObjectSchema, ServiceUncheckedUpdateInputObjectSchema]), where: ServiceWhereUniqueInputObjectSchema  })