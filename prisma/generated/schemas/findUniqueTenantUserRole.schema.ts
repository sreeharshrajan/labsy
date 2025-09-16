import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantUserRoleSelectObjectSchema } from './objects/TenantUserRoleSelect.schema';
import { TenantUserRoleIncludeObjectSchema } from './objects/TenantUserRoleInclude.schema';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './objects/TenantUserRoleWhereUniqueInput.schema';

export const TenantUserRoleFindUniqueSchema: z.ZodType<Prisma.TenantUserRoleFindUniqueArgs> = z.object({ select: TenantUserRoleSelectObjectSchema.optional(), include: TenantUserRoleIncludeObjectSchema.optional(), where: TenantUserRoleWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TenantUserRoleFindUniqueArgs>;

export const TenantUserRoleFindUniqueZodSchema = z.object({ select: TenantUserRoleSelectObjectSchema.optional(), include: TenantUserRoleIncludeObjectSchema.optional(), where: TenantUserRoleWhereUniqueInputObjectSchema }).strict();