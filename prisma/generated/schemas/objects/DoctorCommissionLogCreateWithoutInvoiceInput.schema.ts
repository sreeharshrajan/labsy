import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionStatusSchema } from '../enums/DoctorCommissionStatus.schema';
import { DoctorCommissionCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionCreateNestedOneWithoutDoctorCommissionLogInput.schema';
import { DoctorCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCreateNestedOneWithoutDoctorCommissionLogInput.schema';
import { ReportDetailCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailCreateNestedOneWithoutDoctorCommissionLogInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  commissionAmt: z.number(),
  commissionStatus: DoctorCommissionStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  commission: z.lazy(() => DoctorCommissionCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema),
  reportDetail: z.lazy(() => ReportDetailCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema).optional()
}).strict();
export const DoctorCommissionLogCreateWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogCreateWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogCreateWithoutInvoiceInput>;
export const DoctorCommissionLogCreateWithoutInvoiceInputObjectZodSchema = makeSchema();
