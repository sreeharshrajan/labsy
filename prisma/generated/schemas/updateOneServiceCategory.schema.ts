import { z } from 'zod';
import { ServiceCategorySelectObjectSchema } from './objects/ServiceCategorySelect.schema';
import { ServiceCategoryIncludeObjectSchema } from './objects/ServiceCategoryInclude.schema';
import { ServiceCategoryUpdateInputObjectSchema } from './objects/ServiceCategoryUpdateInput.schema';
import { ServiceCategoryUncheckedUpdateInputObjectSchema } from './objects/ServiceCategoryUncheckedUpdateInput.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema } from './objects/ServiceCategoryWhereUniqueInput.schema';

export const ServiceCategoryUpdateOneSchema = z.object({ select: ServiceCategorySelectObjectSchema.optional(), include: ServiceCategoryIncludeObjectSchema.optional(), data: z.union([ServiceCategoryUpdateInputObjectSchema, ServiceCategoryUncheckedUpdateInputObjectSchema]), where: ServiceCategoryWhereUniqueInputObjectSchema  })