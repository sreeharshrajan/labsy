import { z } from 'zod';
import { TenantPermissionUpdateManyMutationInputObjectSchema } from './objects/TenantPermissionUpdateManyMutationInput.schema';
import { TenantPermissionWhereInputObjectSchema } from './objects/TenantPermissionWhereInput.schema';

export const TenantPermissionUpdateManySchema = z.object({ data: TenantPermissionUpdateManyMutationInputObjectSchema, where: TenantPermissionWhereInputObjectSchema.optional()  })