import { z } from 'zod';
import { TenantUserRoleSelectObjectSchema } from './objects/TenantUserRoleSelect.schema';
import { TenantUserRoleIncludeObjectSchema } from './objects/TenantUserRoleInclude.schema';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './objects/TenantUserRoleWhereUniqueInput.schema';
import { TenantUserRoleCreateInputObjectSchema } from './objects/TenantUserRoleCreateInput.schema';
import { TenantUserRoleUncheckedCreateInputObjectSchema } from './objects/TenantUserRoleUncheckedCreateInput.schema';
import { TenantUserRoleUpdateInputObjectSchema } from './objects/TenantUserRoleUpdateInput.schema';
import { TenantUserRoleUncheckedUpdateInputObjectSchema } from './objects/TenantUserRoleUncheckedUpdateInput.schema';

export const TenantUserRoleUpsertSchema = z.object({ select: TenantUserRoleSelectObjectSchema.optional(), include: TenantUserRoleIncludeObjectSchema.optional(), where: TenantUserRoleWhereUniqueInputObjectSchema, create: z.union([ TenantUserRoleCreateInputObjectSchema, TenantUserRoleUncheckedCreateInputObjectSchema ]), update: z.union([ TenantUserRoleUpdateInputObjectSchema, TenantUserRoleUncheckedUpdateInputObjectSchema ])  })