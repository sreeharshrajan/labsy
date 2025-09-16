import { z } from 'zod';
import { TenantUserRoleSelectObjectSchema } from './objects/TenantUserRoleSelect.schema';
import { TenantUserRoleUpdateManyMutationInputObjectSchema } from './objects/TenantUserRoleUpdateManyMutationInput.schema';
import { TenantUserRoleWhereInputObjectSchema } from './objects/TenantUserRoleWhereInput.schema';

export const TenantUserRoleUpdateManyAndReturnSchema = z.object({ select: TenantUserRoleSelectObjectSchema.optional(), data: TenantUserRoleUpdateManyMutationInputObjectSchema, where: TenantUserRoleWhereInputObjectSchema.optional()  }).strict()