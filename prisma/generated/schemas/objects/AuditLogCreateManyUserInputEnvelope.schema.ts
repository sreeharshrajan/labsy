import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogCreateManyUserInputObjectSchema } from './AuditLogCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AuditLogCreateManyUserInputObjectSchema), z.lazy(() => AuditLogCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AuditLogCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.AuditLogCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogCreateManyUserInputEnvelope>;
export const AuditLogCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
