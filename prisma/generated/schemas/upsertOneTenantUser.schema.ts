import { z } from 'zod';
import { TenantUserSelectObjectSchema } from './objects/TenantUserSelect.schema';
import { TenantUserIncludeObjectSchema } from './objects/TenantUserInclude.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './objects/TenantUserWhereUniqueInput.schema';
import { TenantUserCreateInputObjectSchema } from './objects/TenantUserCreateInput.schema';
import { TenantUserUncheckedCreateInputObjectSchema } from './objects/TenantUserUncheckedCreateInput.schema';
import { TenantUserUpdateInputObjectSchema } from './objects/TenantUserUpdateInput.schema';
import { TenantUserUncheckedUpdateInputObjectSchema } from './objects/TenantUserUncheckedUpdateInput.schema';

export const TenantUserUpsertSchema = z.object({ select: TenantUserSelectObjectSchema.optional(), include: TenantUserIncludeObjectSchema.optional(), where: TenantUserWhereUniqueInputObjectSchema, create: z.union([ TenantUserCreateInputObjectSchema, TenantUserUncheckedCreateInputObjectSchema ]), update: z.union([ TenantUserUpdateInputObjectSchema, TenantUserUncheckedUpdateInputObjectSchema ])  })