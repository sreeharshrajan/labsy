import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorStatusSchema } from '../enums/DoctorStatus.schema';
import { TenantCreateNestedOneWithoutDoctorInputObjectSchema } from './TenantCreateNestedOneWithoutDoctorInput.schema';
import { ReportInvoiceCreateNestedManyWithoutDoctorInputObjectSchema } from './ReportInvoiceCreateNestedManyWithoutDoctorInput.schema';
import { ReportCreateNestedManyWithoutDoctorInputObjectSchema } from './ReportCreateNestedManyWithoutDoctorInput.schema';
import { DoctorAddressCreateNestedManyWithoutDoctorInputObjectSchema } from './DoctorAddressCreateNestedManyWithoutDoctorInput.schema';
import { DoctorCommissionCreateNestedManyWithoutDoctorInputObjectSchema } from './DoctorCommissionCreateNestedManyWithoutDoctorInput.schema';
import { DoctorCommissionPaymentCreateNestedManyWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentCreateNestedManyWithoutDoctorInput.schema';
import { DoctorCommissionLogCreateNestedManyWithoutDoctorInputObjectSchema } from './DoctorCommissionLogCreateNestedManyWithoutDoctorInput.schema'

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
  deletedAt: z.coerce.date().optional().nullable(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutDoctorInputObjectSchema),
  ReportInvoice: z.lazy(() => ReportInvoiceCreateNestedManyWithoutDoctorInputObjectSchema),
  Report: z.lazy(() => ReportCreateNestedManyWithoutDoctorInputObjectSchema),
  doctorAddresses: z.lazy(() => DoctorAddressCreateNestedManyWithoutDoctorInputObjectSchema),
  doctorCommissions: z.lazy(() => DoctorCommissionCreateNestedManyWithoutDoctorInputObjectSchema),
  doctorPayments: z.lazy(() => DoctorCommissionPaymentCreateNestedManyWithoutDoctorInputObjectSchema),
  DoctorCommissionLog: z.lazy(() => DoctorCommissionLogCreateNestedManyWithoutDoctorInputObjectSchema)
}).strict();
export const DoctorCreateInputObjectSchema: z.ZodType<Prisma.DoctorCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateInput>;
export const DoctorCreateInputObjectZodSchema = makeSchema();
