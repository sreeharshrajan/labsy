import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportParameterCreateManyTemplateInputObjectSchema } from './ReportParameterCreateManyTemplateInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportParameterCreateManyTemplateInputObjectSchema), z.lazy(() => ReportParameterCreateManyTemplateInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportParameterCreateManyTemplateInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportParameterCreateManyTemplateInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterCreateManyTemplateInputEnvelope>;
export const ReportParameterCreateManyTemplateInputEnvelopeObjectZodSchema = makeSchema();
