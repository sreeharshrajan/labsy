import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogCreateManyInvoiceInputObjectSchema } from './DoctorCommissionLogCreateManyInvoiceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DoctorCommissionLogCreateManyInvoiceInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateManyInvoiceInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DoctorCommissionLogCreateManyInvoiceInputEnvelopeObjectSchema: z.ZodType<Prisma.DoctorCommissionLogCreateManyInvoiceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogCreateManyInvoiceInputEnvelope>;
export const DoctorCommissionLogCreateManyInvoiceInputEnvelopeObjectZodSchema = makeSchema();
