import { z } from 'zod';
import { TenantUserSelectObjectSchema } from './objects/TenantUserSelect.schema';
import { TenantUserIncludeObjectSchema } from './objects/TenantUserInclude.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './objects/TenantUserWhereUniqueInput.schema';

export const TenantUserDeleteOneSchema = z.object({ select: TenantUserSelectObjectSchema.optional(), include: TenantUserIncludeObjectSchema.optional(), where: TenantUserWhereUniqueInputObjectSchema  })