import { z } from 'zod';
import { SystemPermissionUpdateManyMutationInputObjectSchema } from './objects/SystemPermissionUpdateManyMutationInput.schema';
import { SystemPermissionWhereInputObjectSchema } from './objects/SystemPermissionWhereInput.schema';

export const SystemPermissionUpdateManySchema = z.object({ data: SystemPermissionUpdateManyMutationInputObjectSchema, where: SystemPermissionWhereInputObjectSchema.optional()  })