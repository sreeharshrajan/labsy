import { z } from 'zod';
import { TenantUserRoleSelectObjectSchema } from './objects/TenantUserRoleSelect.schema';
import { TenantUserRoleIncludeObjectSchema } from './objects/TenantUserRoleInclude.schema';
import { TenantUserRoleUpdateInputObjectSchema } from './objects/TenantUserRoleUpdateInput.schema';
import { TenantUserRoleUncheckedUpdateInputObjectSchema } from './objects/TenantUserRoleUncheckedUpdateInput.schema';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './objects/TenantUserRoleWhereUniqueInput.schema';

export const TenantUserRoleUpdateOneSchema = z.object({ select: TenantUserRoleSelectObjectSchema.optional(), include: TenantUserRoleIncludeObjectSchema.optional(), data: z.union([TenantUserRoleUpdateInputObjectSchema, TenantUserRoleUncheckedUpdateInputObjectSchema]), where: TenantUserRoleWhereUniqueInputObjectSchema  })