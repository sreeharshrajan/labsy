import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateManyCustomerAddressInputObjectSchema } from './ReportCreateManyCustomerAddressInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportCreateManyCustomerAddressInputObjectSchema), z.lazy(() => ReportCreateManyCustomerAddressInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyCustomerAddressInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyCustomerAddressInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyCustomerAddressInputEnvelope>;
export const ReportCreateManyCustomerAddressInputEnvelopeObjectZodSchema = makeSchema();
