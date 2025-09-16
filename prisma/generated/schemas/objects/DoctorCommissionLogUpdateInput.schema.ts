import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DoctorCommissionStatusSchema } from '../enums/DoctorCommissionStatus.schema';
import { EnumDoctorCommissionStatusFieldUpdateOperationsInputObjectSchema } from './EnumDoctorCommissionStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DoctorCommissionUpdateOneRequiredWithoutDoctorCommissionLogNestedInputObjectSchema } from './DoctorCommissionUpdateOneRequiredWithoutDoctorCommissionLogNestedInput.schema';
import { DoctorUpdateOneRequiredWithoutDoctorCommissionLogNestedInputObjectSchema } from './DoctorUpdateOneRequiredWithoutDoctorCommissionLogNestedInput.schema';
import { ReportInvoiceUpdateOneWithoutLogsNestedInputObjectSchema } from './ReportInvoiceUpdateOneWithoutLogsNestedInput.schema';
import { ReportDetailUpdateOneWithoutDoctorCommissionLogNestedInputObjectSchema } from './ReportDetailUpdateOneWithoutDoctorCommissionLogNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  commissionAmt: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  commissionStatus: z.union([DoctorCommissionStatusSchema, z.lazy(() => EnumDoctorCommissionStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  commission: z.lazy(() => DoctorCommissionUpdateOneRequiredWithoutDoctorCommissionLogNestedInputObjectSchema).optional(),
  doctor: z.lazy(() => DoctorUpdateOneRequiredWithoutDoctorCommissionLogNestedInputObjectSchema).optional(),
  invoice: z.lazy(() => ReportInvoiceUpdateOneWithoutLogsNestedInputObjectSchema).optional(),
  reportDetail: z.lazy(() => ReportDetailUpdateOneWithoutDoctorCommissionLogNestedInputObjectSchema).optional()
}).strict();
export const DoctorCommissionLogUpdateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUpdateInput>;
export const DoctorCommissionLogUpdateInputObjectZodSchema = makeSchema();
