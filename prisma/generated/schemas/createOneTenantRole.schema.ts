import { z } from 'zod';
import { TenantRoleSelectObjectSchema } from './objects/TenantRoleSelect.schema';
import { TenantRoleIncludeObjectSchema } from './objects/TenantRoleInclude.schema';
import { TenantRoleCreateInputObjectSchema } from './objects/TenantRoleCreateInput.schema';
import { TenantRoleUncheckedCreateInputObjectSchema } from './objects/TenantRoleUncheckedCreateInput.schema';

export const TenantRoleCreateOneSchema = z.object({ select: TenantRoleSelectObjectSchema.optional(), include: TenantRoleIncludeObjectSchema.optional(), data: z.union([TenantRoleCreateInputObjectSchema, TenantRoleUncheckedCreateInputObjectSchema])  })