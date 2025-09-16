import { z } from 'zod';
import { TenantUserSelectObjectSchema } from './objects/TenantUserSelect.schema';
import { TenantUserIncludeObjectSchema } from './objects/TenantUserInclude.schema';
import { TenantUserUpdateInputObjectSchema } from './objects/TenantUserUpdateInput.schema';
import { TenantUserUncheckedUpdateInputObjectSchema } from './objects/TenantUserUncheckedUpdateInput.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './objects/TenantUserWhereUniqueInput.schema';

export const TenantUserUpdateOneSchema = z.object({ select: TenantUserSelectObjectSchema.optional(), include: TenantUserIncludeObjectSchema.optional(), data: z.union([TenantUserUpdateInputObjectSchema, TenantUserUncheckedUpdateInputObjectSchema]), where: TenantUserWhereUniqueInputObjectSchema  })