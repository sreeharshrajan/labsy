import { z } from 'zod';
import { ServiceSelectObjectSchema } from './objects/ServiceSelect.schema';
import { ServiceIncludeObjectSchema } from './objects/ServiceInclude.schema';
import { ServiceWhereUniqueInputObjectSchema } from './objects/ServiceWhereUniqueInput.schema';

export const ServiceDeleteOneSchema = z.object({ select: ServiceSelectObjectSchema.optional(), include: ServiceIncludeObjectSchema.optional(), where: ServiceWhereUniqueInputObjectSchema  })