import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogCreateManyTenantInputObjectSchema } from './AuditLogCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AuditLogCreateManyTenantInputObjectSchema), z.lazy(() => AuditLogCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AuditLogCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.AuditLogCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogCreateManyTenantInputEnvelope>;
export const AuditLogCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
