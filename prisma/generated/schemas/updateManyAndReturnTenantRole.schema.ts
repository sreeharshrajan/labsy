import { z } from 'zod';
import { TenantRoleSelectObjectSchema } from './objects/TenantRoleSelect.schema';
import { TenantRoleUpdateManyMutationInputObjectSchema } from './objects/TenantRoleUpdateManyMutationInput.schema';
import { TenantRoleWhereInputObjectSchema } from './objects/TenantRoleWhereInput.schema';

export const TenantRoleUpdateManyAndReturnSchema = z.object({ select: TenantRoleSelectObjectSchema.optional(), data: TenantRoleUpdateManyMutationInputObjectSchema, where: TenantRoleWhereInputObjectSchema.optional()  }).strict()