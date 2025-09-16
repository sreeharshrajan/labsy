import { z } from 'zod';
import { TenantSelectObjectSchema } from './objects/TenantSelect.schema';
import { TenantIncludeObjectSchema } from './objects/TenantInclude.schema';
import { TenantUpdateInputObjectSchema } from './objects/TenantUpdateInput.schema';
import { TenantUncheckedUpdateInputObjectSchema } from './objects/TenantUncheckedUpdateInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';

export const TenantUpdateOneSchema = z.object({ select: TenantSelectObjectSchema.optional(), include: TenantIncludeObjectSchema.optional(), data: z.union([TenantUpdateInputObjectSchema, TenantUncheckedUpdateInputObjectSchema]), where: TenantWhereUniqueInputObjectSchema  })