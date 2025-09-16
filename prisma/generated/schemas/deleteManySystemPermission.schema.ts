import { z } from 'zod';
import { SystemPermissionWhereInputObjectSchema } from './objects/SystemPermissionWhereInput.schema';

export const SystemPermissionDeleteManySchema = z.object({ where: SystemPermissionWhereInputObjectSchema.optional()  })