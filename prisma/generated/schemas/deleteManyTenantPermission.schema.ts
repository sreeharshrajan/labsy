import { z } from 'zod';
import { TenantPermissionWhereInputObjectSchema } from './objects/TenantPermissionWhereInput.schema';

export const TenantPermissionDeleteManySchema = z.object({ where: TenantPermissionWhereInputObjectSchema.optional()  })