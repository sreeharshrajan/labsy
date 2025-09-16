import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SystemPermissionSelectObjectSchema } from './objects/SystemPermissionSelect.schema';
import { SystemPermissionIncludeObjectSchema } from './objects/SystemPermissionInclude.schema';
import { SystemPermissionWhereUniqueInputObjectSchema } from './objects/SystemPermissionWhereUniqueInput.schema';

export const SystemPermissionFindUniqueOrThrowSchema: z.ZodType<Prisma.SystemPermissionFindUniqueOrThrowArgs> = z.object({ select: SystemPermissionSelectObjectSchema.optional(), include: SystemPermissionIncludeObjectSchema.optional(), where: SystemPermissionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SystemPermissionFindUniqueOrThrowArgs>;

export const SystemPermissionFindUniqueOrThrowZodSchema = z.object({ select: SystemPermissionSelectObjectSchema.optional(), include: SystemPermissionIncludeObjectSchema.optional(), where: SystemPermissionWhereUniqueInputObjectSchema }).strict();