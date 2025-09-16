import { z } from 'zod';
import { TenantSelectObjectSchema } from './objects/TenantSelect.schema';
import { TenantIncludeObjectSchema } from './objects/TenantInclude.schema';
import { TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';

export const TenantDeleteOneSchema = z.object({ select: TenantSelectObjectSchema.optional(), include: TenantIncludeObjectSchema.optional(), where: TenantWhereUniqueInputObjectSchema  })