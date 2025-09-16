import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionStatusSchema } from '../enums/DoctorCommissionStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  doctorId: z.string(),
  commissionId: z.string(),
  reportDetailId: z.string().optional().nullable(),
  commissionAmt: z.number(),
  commissionStatus: DoctorCommissionStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const DoctorCommissionLogCreateManyInvoiceInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogCreateManyInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogCreateManyInvoiceInput>;
export const DoctorCommissionLogCreateManyInvoiceInputObjectZodSchema = makeSchema();
