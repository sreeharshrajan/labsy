import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DoctorStatusSchema } from '../enums/DoctorStatus.schema';
import { EnumDoctorStatusFieldUpdateOperationsInputObjectSchema } from './EnumDoctorStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { ReportInvoiceUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './ReportInvoiceUncheckedUpdateManyWithoutDoctorNestedInput.schema';
import { ReportUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutDoctorNestedInput.schema';
import { DoctorAddressUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './DoctorAddressUncheckedUpdateManyWithoutDoctorNestedInput.schema';
import { DoctorCommissionUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './DoctorCommissionUncheckedUpdateManyWithoutDoctorNestedInput.schema';
import { DoctorCommissionLogUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './DoctorCommissionLogUncheckedUpdateManyWithoutDoctorNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  specialization: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  registrationNo: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  clinicName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  department: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([DoctorStatusSchema, z.lazy(() => EnumDoctorStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tenantId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ReportInvoice: z.lazy(() => ReportInvoiceUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema).optional(),
  doctorAddresses: z.lazy(() => DoctorAddressUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema).optional(),
  doctorCommissions: z.lazy(() => DoctorCommissionUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema).optional(),
  DoctorCommissionLog: z.lazy(() => DoctorCommissionLogUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema).optional()
}).strict();
export const DoctorUncheckedUpdateWithoutDoctorPaymentsInputObjectSchema: z.ZodType<Prisma.DoctorUncheckedUpdateWithoutDoctorPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUncheckedUpdateWithoutDoctorPaymentsInput>;
export const DoctorUncheckedUpdateWithoutDoctorPaymentsInputObjectZodSchema = makeSchema();
