import { z } from 'zod';
import { ServiceCategorySelectObjectSchema } from './objects/ServiceCategorySelect.schema';
import { ServiceCategoryIncludeObjectSchema } from './objects/ServiceCategoryInclude.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema } from './objects/ServiceCategoryWhereUniqueInput.schema';

export const ServiceCategoryDeleteOneSchema = z.object({ select: ServiceCategorySelectObjectSchema.optional(), include: ServiceCategoryIncludeObjectSchema.optional(), where: ServiceCategoryWhereUniqueInputObjectSchema  })