import { z } from 'zod';
import { TenantPermissionSelectObjectSchema } from './objects/TenantPermissionSelect.schema';
import { TenantPermissionIncludeObjectSchema } from './objects/TenantPermissionInclude.schema';
import { TenantPermissionWhereUniqueInputObjectSchema } from './objects/TenantPermissionWhereUniqueInput.schema';
import { TenantPermissionCreateInputObjectSchema } from './objects/TenantPermissionCreateInput.schema';
import { TenantPermissionUncheckedCreateInputObjectSchema } from './objects/TenantPermissionUncheckedCreateInput.schema';
import { TenantPermissionUpdateInputObjectSchema } from './objects/TenantPermissionUpdateInput.schema';
import { TenantPermissionUncheckedUpdateInputObjectSchema } from './objects/TenantPermissionUncheckedUpdateInput.schema';

export const TenantPermissionUpsertSchema = z.object({ select: TenantPermissionSelectObjectSchema.optional(), include: TenantPermissionIncludeObjectSchema.optional(), where: TenantPermissionWhereUniqueInputObjectSchema, create: z.union([ TenantPermissionCreateInputObjectSchema, TenantPermissionUncheckedCreateInputObjectSchema ]), update: z.union([ TenantPermissionUpdateInputObjectSchema, TenantPermissionUncheckedUpdateInputObjectSchema ])  })