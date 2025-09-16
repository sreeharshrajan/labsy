import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateCreateManyTenantInputObjectSchema } from './ReportTemplateCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportTemplateCreateManyTenantInputObjectSchema), z.lazy(() => ReportTemplateCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportTemplateCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportTemplateCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateCreateManyTenantInputEnvelope>;
export const ReportTemplateCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
