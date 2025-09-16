import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DoctorStatusSchema } from '../enums/DoctorStatus.schema';
import { EnumDoctorStatusFieldUpdateOperationsInputObjectSchema } from './EnumDoctorStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TenantUpdateOneRequiredWithoutDoctorNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutDoctorNestedInput.schema';
import { ReportInvoiceUpdateManyWithoutDoctorNestedInputObjectSchema } from './ReportInvoiceUpdateManyWithoutDoctorNestedInput.schema';
import { ReportUpdateManyWithoutDoctorNestedInputObjectSchema } from './ReportUpdateManyWithoutDoctorNestedInput.schema';
import { DoctorCommissionUpdateManyWithoutDoctorNestedInputObjectSchema } from './DoctorCommissionUpdateManyWithoutDoctorNestedInput.schema';
import { DoctorCommissionPaymentUpdateManyWithoutDoctorNestedInputObjectSchema } from './DoctorCommissionPaymentUpdateManyWithoutDoctorNestedInput.schema';
import { DoctorCommissionLogUpdateManyWithoutDoctorNestedInputObjectSchema } from './DoctorCommissionLogUpdateManyWithoutDoctorNestedInput.schema'

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
  tenant: z.lazy(() => TenantUpdateOneRequiredWithoutDoctorNestedInputObjectSchema).optional(),
  ReportInvoice: z.lazy(() => ReportInvoiceUpdateManyWithoutDoctorNestedInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUpdateManyWithoutDoctorNestedInputObjectSchema).optional(),
  doctorCommissions: z.lazy(() => DoctorCommissionUpdateManyWithoutDoctorNestedInputObjectSchema).optional(),
  doctorPayments: z.lazy(() => DoctorCommissionPaymentUpdateManyWithoutDoctorNestedInputObjectSchema).optional(),
  DoctorCommissionLog: z.lazy(() => DoctorCommissionLogUpdateManyWithoutDoctorNestedInputObjectSchema).optional()
}).strict();
export const DoctorUpdateWithoutDoctorAddressesInputObjectSchema: z.ZodType<Prisma.DoctorUpdateWithoutDoctorAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateWithoutDoctorAddressesInput>;
export const DoctorUpdateWithoutDoctorAddressesInputObjectZodSchema = makeSchema();
