import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantRoleSelectObjectSchema } from './objects/TenantRoleSelect.schema';
import { TenantRoleIncludeObjectSchema } from './objects/TenantRoleInclude.schema';
import { TenantRoleWhereUniqueInputObjectSchema } from './objects/TenantRoleWhereUniqueInput.schema';

export const TenantRoleFindUniqueOrThrowSchema: z.ZodType<Prisma.TenantRoleFindUniqueOrThrowArgs> = z.object({ select: TenantRoleSelectObjectSchema.optional(), include: TenantRoleIncludeObjectSchema.optional(), where: TenantRoleWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TenantRoleFindUniqueOrThrowArgs>;

export const TenantRoleFindUniqueOrThrowZodSchema = z.object({ select: TenantRoleSelectObjectSchema.optional(), include: TenantRoleIncludeObjectSchema.optional(), where: TenantRoleWhereUniqueInputObjectSchema }).strict();