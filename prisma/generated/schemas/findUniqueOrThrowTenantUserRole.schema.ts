import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantUserRoleSelectObjectSchema } from './objects/TenantUserRoleSelect.schema';
import { TenantUserRoleIncludeObjectSchema } from './objects/TenantUserRoleInclude.schema';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './objects/TenantUserRoleWhereUniqueInput.schema';

export const TenantUserRoleFindUniqueOrThrowSchema: z.ZodType<Prisma.TenantUserRoleFindUniqueOrThrowArgs> = z.object({ select: TenantUserRoleSelectObjectSchema.optional(), include: TenantUserRoleIncludeObjectSchema.optional(), where: TenantUserRoleWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TenantUserRoleFindUniqueOrThrowArgs>;

export const TenantUserRoleFindUniqueOrThrowZodSchema = z.object({ select: TenantUserRoleSelectObjectSchema.optional(), include: TenantUserRoleIncludeObjectSchema.optional(), where: TenantUserRoleWhereUniqueInputObjectSchema }).strict();