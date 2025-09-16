import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DoctorCommissionStatusSchema } from '../enums/DoctorCommissionStatus.schema';
import { EnumDoctorCommissionStatusFieldUpdateOperationsInputObjectSchema } from './EnumDoctorCommissionStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  doctorId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  commissionId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  reportDetailId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  commissionAmt: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  commissionStatus: z.union([DoctorCommissionStatusSchema, z.lazy(() => EnumDoctorCommissionStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const DoctorCommissionLogUncheckedUpdateWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUncheckedUpdateWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUncheckedUpdateWithoutInvoiceInput>;
export const DoctorCommissionLogUncheckedUpdateWithoutInvoiceInputObjectZodSchema = makeSchema();
