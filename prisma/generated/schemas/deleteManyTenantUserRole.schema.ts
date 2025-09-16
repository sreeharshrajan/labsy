import { z } from 'zod';
import { TenantUserRoleWhereInputObjectSchema } from './objects/TenantUserRoleWhereInput.schema';

export const TenantUserRoleDeleteManySchema = z.object({ where: TenantUserRoleWhereInputObjectSchema.optional()  })