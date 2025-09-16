import { z } from 'zod';
import { TenantUserSelectObjectSchema } from './objects/TenantUserSelect.schema';
import { TenantUserIncludeObjectSchema } from './objects/TenantUserInclude.schema';
import { TenantUserCreateInputObjectSchema } from './objects/TenantUserCreateInput.schema';
import { TenantUserUncheckedCreateInputObjectSchema } from './objects/TenantUserUncheckedCreateInput.schema';

export const TenantUserCreateOneSchema = z.object({ select: TenantUserSelectObjectSchema.optional(), include: TenantUserIncludeObjectSchema.optional(), data: z.union([TenantUserCreateInputObjectSchema, TenantUserUncheckedCreateInputObjectSchema])  })