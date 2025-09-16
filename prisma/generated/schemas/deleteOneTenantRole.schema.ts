import { z } from 'zod';
import { TenantRoleSelectObjectSchema } from './objects/TenantRoleSelect.schema';
import { TenantRoleIncludeObjectSchema } from './objects/TenantRoleInclude.schema';
import { TenantRoleWhereUniqueInputObjectSchema } from './objects/TenantRoleWhereUniqueInput.schema';

export const TenantRoleDeleteOneSchema = z.object({ select: TenantRoleSelectObjectSchema.optional(), include: TenantRoleIncludeObjectSchema.optional(), where: TenantRoleWhereUniqueInputObjectSchema  })