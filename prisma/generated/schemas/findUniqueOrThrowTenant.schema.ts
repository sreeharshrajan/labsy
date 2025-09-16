import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantSelectObjectSchema } from './objects/TenantSelect.schema';
import { TenantIncludeObjectSchema } from './objects/TenantInclude.schema';
import { TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';

export const TenantFindUniqueOrThrowSchema: z.ZodType<Prisma.TenantFindUniqueOrThrowArgs> = z.object({ select: TenantSelectObjectSchema.optional(), include: TenantIncludeObjectSchema.optional(), where: TenantWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TenantFindUniqueOrThrowArgs>;

export const TenantFindUniqueOrThrowZodSchema = z.object({ select: TenantSelectObjectSchema.optional(), include: TenantIncludeObjectSchema.optional(), where: TenantWhereUniqueInputObjectSchema }).strict();