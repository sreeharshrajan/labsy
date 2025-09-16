import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorStatusSchema } from '../enums/DoctorStatus.schema';
import { TenantCreateNestedOneWithoutDoctorInputObjectSchema } from './TenantCreateNestedOneWithoutDoctorInput.schema';
import { ReportInvoiceCreateNestedManyWithoutDoctorInputObjectSchema } from './ReportInvoiceCreateNestedManyWithoutDoctorInput.schema';
import { ReportCreateNestedManyWithoutDoctorInputObjectSchema } from './ReportCreateNestedManyWithoutDoctorInput.schema';
import { DoctorAddressCreateNestedManyWithoutDoctorInputObjectSchema } from './DoctorAddressCreateNestedManyWithoutDoctorInput.schema';
import { DoctorCommissionCreateNestedManyWithoutDoctorInputObjectSchema } from './DoctorCommissionCreateNestedManyWithoutDoctorInput.schema';
import { DoctorCommissionPaymentCreateNestedManyWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentCreateNestedManyWithoutDoctorInput.schema'

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
  tenant: z.lazy(() => TenantCreateNestedOneWithoutDoctorInputObjectSchema),
  ReportInvoice: z.lazy(() => ReportInvoiceCreateNestedManyWithoutDoctorInputObjectSchema).optional(),
  Report: z.lazy(() => ReportCreateNestedManyWithoutDoctorInputObjectSchema).optional(),
  doctorAddresses: z.lazy(() => DoctorAddressCreateNestedManyWithoutDoctorInputObjectSchema).optional(),
  doctorCommissions: z.lazy(() => DoctorCommissionCreateNestedManyWithoutDoctorInputObjectSchema).optional(),
  doctorPayments: z.lazy(() => DoctorCommissionPaymentCreateNestedManyWithoutDoctorInputObjectSchema).optional()
}).strict();
export const DoctorCreateWithoutDoctorCommissionLogInputObjectSchema: z.ZodType<Prisma.DoctorCreateWithoutDoctorCommissionLogInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateWithoutDoctorCommissionLogInput>;
export const DoctorCreateWithoutDoctorCommissionLogInputObjectZodSchema = makeSchema();
