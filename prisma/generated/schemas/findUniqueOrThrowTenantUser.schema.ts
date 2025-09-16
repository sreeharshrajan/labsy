import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantUserSelectObjectSchema } from './objects/TenantUserSelect.schema';
import { TenantUserIncludeObjectSchema } from './objects/TenantUserInclude.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './objects/TenantUserWhereUniqueInput.schema';

export const TenantUserFindUniqueOrThrowSchema: z.ZodType<Prisma.TenantUserFindUniqueOrThrowArgs> = z.object({ select: TenantUserSelectObjectSchema.optional(), include: TenantUserIncludeObjectSchema.optional(), where: TenantUserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TenantUserFindUniqueOrThrowArgs>;

export const TenantUserFindUniqueOrThrowZodSchema = z.object({ select: TenantUserSelectObjectSchema.optional(), include: TenantUserIncludeObjectSchema.optional(), where: TenantUserWhereUniqueInputObjectSchema }).strict();