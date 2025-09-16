import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantPermissionSelectObjectSchema } from './objects/TenantPermissionSelect.schema';
import { TenantPermissionIncludeObjectSchema } from './objects/TenantPermissionInclude.schema';
import { TenantPermissionWhereUniqueInputObjectSchema } from './objects/TenantPermissionWhereUniqueInput.schema';

export const TenantPermissionFindUniqueSchema: z.ZodType<Prisma.TenantPermissionFindUniqueArgs> = z.object({ select: TenantPermissionSelectObjectSchema.optional(), include: TenantPermissionIncludeObjectSchema.optional(), where: TenantPermissionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TenantPermissionFindUniqueArgs>;

export const TenantPermissionFindUniqueZodSchema = z.object({ select: TenantPermissionSelectObjectSchema.optional(), include: TenantPermissionIncludeObjectSchema.optional(), where: TenantPermissionWhereUniqueInputObjectSchema }).strict();