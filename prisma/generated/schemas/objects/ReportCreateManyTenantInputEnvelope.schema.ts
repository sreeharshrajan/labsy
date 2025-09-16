import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateManyTenantInputObjectSchema } from './ReportCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportCreateManyTenantInputObjectSchema), z.lazy(() => ReportCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyTenantInputEnvelope>;
export const ReportCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
