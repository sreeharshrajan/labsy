import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionStatusSchema } from '../enums/DoctorCommissionStatus.schema';
import { DoctorCommissionCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionCreateNestedOneWithoutDoctorCommissionLogInput.schema';
import { ReportInvoiceCreateNestedOneWithoutLogsInputObjectSchema } from './ReportInvoiceCreateNestedOneWithoutLogsInput.schema';
import { ReportDetailCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailCreateNestedOneWithoutDoctorCommissionLogInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  commissionAmt: z.number(),
  commissionStatus: DoctorCommissionStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  commission: z.lazy(() => DoctorCommissionCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema),
  invoice: z.lazy(() => ReportInvoiceCreateNestedOneWithoutLogsInputObjectSchema).optional(),
  reportDetail: z.lazy(() => ReportDetailCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema).optional()
}).strict();
export const DoctorCommissionLogCreateWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogCreateWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogCreateWithoutDoctorInput>;
export const DoctorCommissionLogCreateWithoutDoctorInputObjectZodSchema = makeSchema();
