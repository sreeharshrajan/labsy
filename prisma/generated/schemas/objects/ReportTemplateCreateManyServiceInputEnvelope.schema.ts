import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateCreateManyServiceInputObjectSchema } from './ReportTemplateCreateManyServiceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportTemplateCreateManyServiceInputObjectSchema), z.lazy(() => ReportTemplateCreateManyServiceInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportTemplateCreateManyServiceInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportTemplateCreateManyServiceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateCreateManyServiceInputEnvelope>;
export const ReportTemplateCreateManyServiceInputEnvelopeObjectZodSchema = makeSchema();
