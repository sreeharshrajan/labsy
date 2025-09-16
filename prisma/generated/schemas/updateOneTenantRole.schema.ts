import { z } from 'zod';
import { TenantRoleSelectObjectSchema } from './objects/TenantRoleSelect.schema';
import { TenantRoleIncludeObjectSchema } from './objects/TenantRoleInclude.schema';
import { TenantRoleUpdateInputObjectSchema } from './objects/TenantRoleUpdateInput.schema';
import { TenantRoleUncheckedUpdateInputObjectSchema } from './objects/TenantRoleUncheckedUpdateInput.schema';
import { TenantRoleWhereUniqueInputObjectSchema } from './objects/TenantRoleWhereUniqueInput.schema';

export const TenantRoleUpdateOneSchema = z.object({ select: TenantRoleSelectObjectSchema.optional(), include: TenantRoleIncludeObjectSchema.optional(), data: z.union([TenantRoleUpdateInputObjectSchema, TenantRoleUncheckedUpdateInputObjectSchema]), where: TenantRoleWhereUniqueInputObjectSchema  })