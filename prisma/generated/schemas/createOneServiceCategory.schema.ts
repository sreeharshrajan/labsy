import { z } from 'zod';
import { ServiceCategorySelectObjectSchema } from './objects/ServiceCategorySelect.schema';
import { ServiceCategoryIncludeObjectSchema } from './objects/ServiceCategoryInclude.schema';
import { ServiceCategoryCreateInputObjectSchema } from './objects/ServiceCategoryCreateInput.schema';
import { ServiceCategoryUncheckedCreateInputObjectSchema } from './objects/ServiceCategoryUncheckedCreateInput.schema';

export const ServiceCategoryCreateOneSchema = z.object({ select: ServiceCategorySelectObjectSchema.optional(), include: ServiceCategoryIncludeObjectSchema.optional(), data: z.union([ServiceCategoryCreateInputObjectSchema, ServiceCategoryUncheckedCreateInputObjectSchema])  })