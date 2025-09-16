import { z } from 'zod';
import { TenantUserRoleSelectObjectSchema } from './objects/TenantUserRoleSelect.schema';
import { TenantUserRoleIncludeObjectSchema } from './objects/TenantUserRoleInclude.schema';
import { TenantUserRoleCreateInputObjectSchema } from './objects/TenantUserRoleCreateInput.schema';
import { TenantUserRoleUncheckedCreateInputObjectSchema } from './objects/TenantUserRoleUncheckedCreateInput.schema';

export const TenantUserRoleCreateOneSchema = z.object({ select: TenantUserRoleSelectObjectSchema.optional(), include: TenantUserRoleIncludeObjectSchema.optional(), data: z.union([TenantUserRoleCreateInputObjectSchema, TenantUserRoleUncheckedCreateInputObjectSchema])  })