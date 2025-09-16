import { z } from 'zod';
import { TenantPermissionSelectObjectSchema } from './objects/TenantPermissionSelect.schema';
import { TenantPermissionIncludeObjectSchema } from './objects/TenantPermissionInclude.schema';
import { TenantPermissionWhereUniqueInputObjectSchema } from './objects/TenantPermissionWhereUniqueInput.schema';

export const TenantPermissionDeleteOneSchema = z.object({ select: TenantPermissionSelectObjectSchema.optional(), include: TenantPermissionIncludeObjectSchema.optional(), where: TenantPermissionWhereUniqueInputObjectSchema  })