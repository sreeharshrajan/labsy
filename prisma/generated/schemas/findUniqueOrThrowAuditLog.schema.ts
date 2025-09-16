import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuditLogSelectObjectSchema } from './objects/AuditLogSelect.schema';
import { AuditLogIncludeObjectSchema } from './objects/AuditLogInclude.schema';
import { AuditLogWhereUniqueInputObjectSchema } from './objects/AuditLogWhereUniqueInput.schema';

export const AuditLogFindUniqueOrThrowSchema: z.ZodType<Prisma.AuditLogFindUniqueOrThrowArgs> = z.object({ select: AuditLogSelectObjectSchema.optional(), include: AuditLogIncludeObjectSchema.optional(), where: AuditLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AuditLogFindUniqueOrThrowArgs>;

export const AuditLogFindUniqueOrThrowZodSchema = z.object({ select: AuditLogSelectObjectSchema.optional(), include: AuditLogIncludeObjectSchema.optional(), where: AuditLogWhereUniqueInputObjectSchema }).strict();