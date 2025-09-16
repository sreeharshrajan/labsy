import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorStatusSchema } from '../enums/DoctorStatus.schema';
import { ReportInvoiceUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './ReportInvoiceUncheckedCreateNestedManyWithoutDoctorInput.schema';
import { ReportUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutDoctorInput.schema';
import { DoctorCommissionUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './DoctorCommissionUncheckedCreateNestedManyWithoutDoctorInput.schema';
import { DoctorCommissionPaymentUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentUncheckedCreateNestedManyWithoutDoctorInput.schema';
import { DoctorCommissionLogUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './DoctorCommissionLogUncheckedCreateNestedManyWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  specialization: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  registrationNo: z.string().optional().nullable(),
  clinicName: z.string().optional().nullable(),
  department: z.string().optional().nullable(),
  status: DoctorStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantId: z.string(),
  ReportInvoice: z.lazy(() => ReportInvoiceUncheckedCreateNestedManyWithoutDoctorInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUncheckedCreateNestedManyWithoutDoctorInputObjectSchema).optional(),
  doctorCommissions: z.lazy(() => DoctorCommissionUncheckedCreateNestedManyWithoutDoctorInputObjectSchema).optional(),
  doctorPayments: z.lazy(() => DoctorCommissionPaymentUncheckedCreateNestedManyWithoutDoctorInputObjectSchema).optional(),
  DoctorCommissionLog: z.lazy(() => DoctorCommissionLogUncheckedCreateNestedManyWithoutDoctorInputObjectSchema).optional()
}).strict();
export const DoctorUncheckedCreateWithoutDoctorAddressesInputObjectSchema: z.ZodType<Prisma.DoctorUncheckedCreateWithoutDoctorAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUncheckedCreateWithoutDoctorAddressesInput>;
export const DoctorUncheckedCreateWithoutDoctorAddressesInputObjectZodSchema = makeSchema();
