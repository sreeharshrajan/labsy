import { z } from 'zod';
import { ServiceSelectObjectSchema } from './objects/ServiceSelect.schema';
import { ServiceIncludeObjectSchema } from './objects/ServiceInclude.schema';
import { ServiceWhereUniqueInputObjectSchema } from './objects/ServiceWhereUniqueInput.schema';
import { ServiceCreateInputObjectSchema } from './objects/ServiceCreateInput.schema';
import { ServiceUncheckedCreateInputObjectSchema } from './objects/ServiceUncheckedCreateInput.schema';
import { ServiceUpdateInputObjectSchema } from './objects/ServiceUpdateInput.schema';
import { ServiceUncheckedUpdateInputObjectSchema } from './objects/ServiceUncheckedUpdateInput.schema';

export const ServiceUpsertSchema = z.object({ select: ServiceSelectObjectSchema.optional(), include: ServiceIncludeObjectSchema.optional(), where: ServiceWhereUniqueInputObjectSchema, create: z.union([ ServiceCreateInputObjectSchema, ServiceUncheckedCreateInputObjectSchema ]), update: z.union([ ServiceUpdateInputObjectSchema, ServiceUncheckedUpdateInputObjectSchema ])  })