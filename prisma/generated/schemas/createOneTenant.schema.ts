import { z } from 'zod';
import { TenantSelectObjectSchema } from './objects/TenantSelect.schema';
import { TenantIncludeObjectSchema } from './objects/TenantInclude.schema';
import { TenantCreateInputObjectSchema } from './objects/TenantCreateInput.schema';
import { TenantUncheckedCreateInputObjectSchema } from './objects/TenantUncheckedCreateInput.schema';

export const TenantCreateOneSchema = z.object({ select: TenantSelectObjectSchema.optional(), include: TenantIncludeObjectSchema.optional(), data: z.union([TenantCreateInputObjectSchema, TenantUncheckedCreateInputObjectSchema])  })