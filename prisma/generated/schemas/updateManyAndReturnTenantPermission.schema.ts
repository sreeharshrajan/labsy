import { z } from 'zod';
import { TenantPermissionSelectObjectSchema } from './objects/TenantPermissionSelect.schema';
import { TenantPermissionUpdateManyMutationInputObjectSchema } from './objects/TenantPermissionUpdateManyMutationInput.schema';
import { TenantPermissionWhereInputObjectSchema } from './objects/TenantPermissionWhereInput.schema';

export const TenantPermissionUpdateManyAndReturnSchema = z.object({ select: TenantPermissionSelectObjectSchema.optional(), data: TenantPermissionUpdateManyMutationInputObjectSchema, where: TenantPermissionWhereInputObjectSchema.optional()  }).strict()