import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateManyLabAddressInputObjectSchema } from './ReportCreateManyLabAddressInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportCreateManyLabAddressInputObjectSchema), z.lazy(() => ReportCreateManyLabAddressInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyLabAddressInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyLabAddressInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyLabAddressInputEnvelope>;
export const ReportCreateManyLabAddressInputEnvelopeObjectZodSchema = makeSchema();
