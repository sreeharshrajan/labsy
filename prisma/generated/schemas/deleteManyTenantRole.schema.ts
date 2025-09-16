import { z } from 'zod';
import { TenantRoleWhereInputObjectSchema } from './objects/TenantRoleWhereInput.schema';

export const TenantRoleDeleteManySchema = z.object({ where: TenantRoleWhereInputObjectSchema.optional()  })