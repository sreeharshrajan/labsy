import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { ReportInvoiceOrderByRelationAggregateInputObjectSchema } from './ReportInvoiceOrderByRelationAggregateInput.schema';
import { ReportOrderByRelationAggregateInputObjectSchema } from './ReportOrderByRelationAggregateInput.schema';
import { DoctorAddressOrderByRelationAggregateInputObjectSchema } from './DoctorAddressOrderByRelationAggregateInput.schema';
import { DoctorCommissionOrderByRelationAggregateInputObjectSchema } from './DoctorCommissionOrderByRelationAggregateInput.schema';
import { DoctorCommissionPaymentOrderByRelationAggregateInputObjectSchema } from './DoctorCommissionPaymentOrderByRelationAggregateInput.schema';
import { DoctorCommissionLogOrderByRelationAggregateInputObjectSchema } from './DoctorCommissionLogOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  specialization: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  registrationNo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  clinicName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  department: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenantId: SortOrderSchema.optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
  ReportInvoice: z.lazy(() => ReportInvoiceOrderByRelationAggregateInputObjectSchema).optional(),
  Report: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional(),
  doctorAddresses: z.lazy(() => DoctorAddressOrderByRelationAggregateInputObjectSchema).optional(),
  doctorCommissions: z.lazy(() => DoctorCommissionOrderByRelationAggregateInputObjectSchema).optional(),
  doctorPayments: z.lazy(() => DoctorCommissionPaymentOrderByRelationAggregateInputObjectSchema).optional(),
  DoctorCommissionLog: z.lazy(() => DoctorCommissionLogOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const DoctorOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DoctorOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorOrderByWithRelationInput>;
export const DoctorOrderByWithRelationInputObjectZodSchema = makeSchema();
