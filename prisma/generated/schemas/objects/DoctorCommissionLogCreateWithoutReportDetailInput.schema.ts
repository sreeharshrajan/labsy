import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionStatusSchema } from '../enums/DoctorCommissionStatus.schema';
import { DoctorCommissionCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionCreateNestedOneWithoutDoctorCommissionLogInput.schema';
import { DoctorCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCreateNestedOneWithoutDoctorCommissionLogInput.schema';
import { ReportInvoiceCreateNestedOneWithoutLogsInputObjectSchema } from './ReportInvoiceCreateNestedOneWithoutLogsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  commissionAmt: z.number(),
  commissionStatus: DoctorCommissionStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  commission: z.lazy(() => DoctorCommissionCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema),
  invoice: z.lazy(() => ReportInvoiceCreateNestedOneWithoutLogsInputObjectSchema).optional()
}).strict();
export const DoctorCommissionLogCreateWithoutReportDetailInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogCreateWithoutReportDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogCreateWithoutReportDetailInput>;
export const DoctorCommissionLogCreateWithoutReportDetailInputObjectZodSchema = makeSchema();
