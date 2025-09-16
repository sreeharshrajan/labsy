import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantRoleSelectObjectSchema } from './objects/TenantRoleSelect.schema';
import { TenantRoleIncludeObjectSchema } from './objects/TenantRoleInclude.schema';
import { TenantRoleWhereUniqueInputObjectSchema } from './objects/TenantRoleWhereUniqueInput.schema';

export const TenantRoleFindUniqueSchema: z.ZodType<Prisma.TenantRoleFindUniqueArgs> = z.object({ select: TenantRoleSelectObjectSchema.optional(), include: TenantRoleIncludeObjectSchema.optional(), where: TenantRoleWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TenantRoleFindUniqueArgs>;

export const TenantRoleFindUniqueZodSchema = z.object({ select: TenantRoleSelectObjectSchema.optional(), include: TenantRoleIncludeObjectSchema.optional(), where: TenantRoleWhereUniqueInputObjectSchema }).strict();