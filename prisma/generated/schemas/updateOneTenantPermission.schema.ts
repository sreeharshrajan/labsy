import { z } from 'zod';
import { TenantPermissionSelectObjectSchema } from './objects/TenantPermissionSelect.schema';
import { TenantPermissionIncludeObjectSchema } from './objects/TenantPermissionInclude.schema';
import { TenantPermissionUpdateInputObjectSchema } from './objects/TenantPermissionUpdateInput.schema';
import { TenantPermissionUncheckedUpdateInputObjectSchema } from './objects/TenantPermissionUncheckedUpdateInput.schema';
import { TenantPermissionWhereUniqueInputObjectSchema } from './objects/TenantPermissionWhereUniqueInput.schema';

export const TenantPermissionUpdateOneSchema = z.object({ select: TenantPermissionSelectObjectSchema.optional(), include: TenantPermissionIncludeObjectSchema.optional(), data: z.union([TenantPermissionUpdateInputObjectSchema, TenantPermissionUncheckedUpdateInputObjectSchema]), where: TenantPermissionWhereUniqueInputObjectSchema  })