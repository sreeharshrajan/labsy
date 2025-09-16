import { z } from 'zod';
import { ServiceSelectObjectSchema } from './objects/ServiceSelect.schema';
import { ServiceUpdateManyMutationInputObjectSchema } from './objects/ServiceUpdateManyMutationInput.schema';
import { ServiceWhereInputObjectSchema } from './objects/ServiceWhereInput.schema';

export const ServiceUpdateManyAndReturnSchema = z.object({ select: ServiceSelectObjectSchema.optional(), data: ServiceUpdateManyMutationInputObjectSchema, where: ServiceWhereInputObjectSchema.optional()  }).strict()