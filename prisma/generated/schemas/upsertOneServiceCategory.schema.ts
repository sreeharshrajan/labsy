import { z } from 'zod';
import { ServiceCategorySelectObjectSchema } from './objects/ServiceCategorySelect.schema';
import { ServiceCategoryIncludeObjectSchema } from './objects/ServiceCategoryInclude.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema } from './objects/ServiceCategoryWhereUniqueInput.schema';
import { ServiceCategoryCreateInputObjectSchema } from './objects/ServiceCategoryCreateInput.schema';
import { ServiceCategoryUncheckedCreateInputObjectSchema } from './objects/ServiceCategoryUncheckedCreateInput.schema';
import { ServiceCategoryUpdateInputObjectSchema } from './objects/ServiceCategoryUpdateInput.schema';
import { ServiceCategoryUncheckedUpdateInputObjectSchema } from './objects/ServiceCategoryUncheckedUpdateInput.schema';

export const ServiceCategoryUpsertSchema = z.object({ select: ServiceCategorySelectObjectSchema.optional(), include: ServiceCategoryIncludeObjectSchema.optional(), where: ServiceCategoryWhereUniqueInputObjectSchema, create: z.union([ ServiceCategoryCreateInputObjectSchema, ServiceCategoryUncheckedCreateInputObjectSchema ]), update: z.union([ ServiceCategoryUpdateInputObjectSchema, ServiceCategoryUncheckedUpdateInputObjectSchema ])  })