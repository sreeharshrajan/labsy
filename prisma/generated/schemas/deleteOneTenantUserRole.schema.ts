import { z } from 'zod';
import { TenantUserRoleSelectObjectSchema } from './objects/TenantUserRoleSelect.schema';
import { TenantUserRoleIncludeObjectSchema } from './objects/TenantUserRoleInclude.schema';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './objects/TenantUserRoleWhereUniqueInput.schema';

export const TenantUserRoleDeleteOneSchema = z.object({ select: TenantUserRoleSelectObjectSchema.optional(), include: TenantUserRoleIncludeObjectSchema.optional(), where: TenantUserRoleWhereUniqueInputObjectSchema  })