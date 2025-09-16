import { z } from 'zod';
import { TenantPermissionSelectObjectSchema } from './objects/TenantPermissionSelect.schema';
import { TenantPermissionIncludeObjectSchema } from './objects/TenantPermissionInclude.schema';
import { TenantPermissionCreateInputObjectSchema } from './objects/TenantPermissionCreateInput.schema';
import { TenantPermissionUncheckedCreateInputObjectSchema } from './objects/TenantPermissionUncheckedCreateInput.schema';

export const TenantPermissionCreateOneSchema = z.object({ select: TenantPermissionSelectObjectSchema.optional(), include: TenantPermissionIncludeObjectSchema.optional(), data: z.union([TenantPermissionCreateInputObjectSchema, TenantPermissionUncheckedCreateInputObjectSchema])  })