import { z } from 'zod';
import { TenantRoleSelectObjectSchema } from './objects/TenantRoleSelect.schema';
import { TenantRoleIncludeObjectSchema } from './objects/TenantRoleInclude.schema';
import { TenantRoleWhereUniqueInputObjectSchema } from './objects/TenantRoleWhereUniqueInput.schema';
import { TenantRoleCreateInputObjectSchema } from './objects/TenantRoleCreateInput.schema';
import { TenantRoleUncheckedCreateInputObjectSchema } from './objects/TenantRoleUncheckedCreateInput.schema';
import { TenantRoleUpdateInputObjectSchema } from './objects/TenantRoleUpdateInput.schema';
import { TenantRoleUncheckedUpdateInputObjectSchema } from './objects/TenantRoleUncheckedUpdateInput.schema';

export const TenantRoleUpsertSchema = z.object({ select: TenantRoleSelectObjectSchema.optional(), include: TenantRoleIncludeObjectSchema.optional(), where: TenantRoleWhereUniqueInputObjectSchema, create: z.union([ TenantRoleCreateInputObjectSchema, TenantRoleUncheckedCreateInputObjectSchema ]), update: z.union([ TenantRoleUpdateInputObjectSchema, TenantRoleUncheckedUpdateInputObjectSchema ])  })