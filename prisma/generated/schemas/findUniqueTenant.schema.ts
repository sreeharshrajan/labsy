import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantSelectObjectSchema } from './objects/TenantSelect.schema';
import { TenantIncludeObjectSchema } from './objects/TenantInclude.schema';
import { TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';

export const TenantFindUniqueSchema: z.ZodType<Prisma.TenantFindUniqueArgs> = z.object({ select: TenantSelectObjectSchema.optional(), include: TenantIncludeObjectSchema.optional(), where: TenantWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TenantFindUniqueArgs>;

export const TenantFindUniqueZodSchema = z.object({ select: TenantSelectObjectSchema.optional(), include: TenantIncludeObjectSchema.optional(), where: TenantWhereUniqueInputObjectSchema }).strict();