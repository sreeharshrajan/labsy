import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantPermissionSelectObjectSchema } from './objects/TenantPermissionSelect.schema';
import { TenantPermissionIncludeObjectSchema } from './objects/TenantPermissionInclude.schema';
import { TenantPermissionWhereUniqueInputObjectSchema } from './objects/TenantPermissionWhereUniqueInput.schema';

export const TenantPermissionFindUniqueOrThrowSchema: z.ZodType<Prisma.TenantPermissionFindUniqueOrThrowArgs> = z.object({ select: TenantPermissionSelectObjectSchema.optional(), include: TenantPermissionIncludeObjectSchema.optional(), where: TenantPermissionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TenantPermissionFindUniqueOrThrowArgs>;

export const TenantPermissionFindUniqueOrThrowZodSchema = z.object({ select: TenantPermissionSelectObjectSchema.optional(), include: TenantPermissionIncludeObjectSchema.optional(), where: TenantPermissionWhereUniqueInputObjectSchema }).strict();