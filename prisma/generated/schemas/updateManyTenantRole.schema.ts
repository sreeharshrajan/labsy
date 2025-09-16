import { z } from 'zod';
import { TenantRoleUpdateManyMutationInputObjectSchema } from './objects/TenantRoleUpdateManyMutationInput.schema';
import { TenantRoleWhereInputObjectSchema } from './objects/TenantRoleWhereInput.schema';

export const TenantRoleUpdateManySchema = z.object({ data: TenantRoleUpdateManyMutationInputObjectSchema, where: TenantRoleWhereInputObjectSchema.optional()  })