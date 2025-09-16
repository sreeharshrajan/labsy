import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionStatusSchema } from '../enums/DoctorCommissionStatus.schema';
import { DoctorCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCreateNestedOneWithoutDoctorCommissionLogInput.schema';
import { ReportInvoiceCreateNestedOneWithoutLogsInputObjectSchema } from './ReportInvoiceCreateNestedOneWithoutLogsInput.schema';
import { ReportDetailCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailCreateNestedOneWithoutDoctorCommissionLogInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  commissionAmt: z.number(),
  commissionStatus: DoctorCommissionStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema),
  invoice: z.lazy(() => ReportInvoiceCreateNestedOneWithoutLogsInputObjectSchema).optional(),
  reportDetail: z.lazy(() => ReportDetailCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema).optional()
}).strict();
export const DoctorCommissionLogCreateWithoutCommissionInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogCreateWithoutCommissionInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogCreateWithoutCommissionInput>;
export const DoctorCommissionLogCreateWithoutCommissionInputObjectZodSchema = makeSchema();
