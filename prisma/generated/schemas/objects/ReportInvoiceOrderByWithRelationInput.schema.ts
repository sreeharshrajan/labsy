import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { CustomerOrderByWithRelationInputObjectSchema } from './CustomerOrderByWithRelationInput.schema';
import { DoctorOrderByWithRelationInputObjectSchema } from './DoctorOrderByWithRelationInput.schema';
import { ReportInvoiceItemOrderByRelationAggregateInputObjectSchema } from './ReportInvoiceItemOrderByRelationAggregateInput.schema';
import { ReportInvoicePaymentOrderByRelationAggregateInputObjectSchema } from './ReportInvoicePaymentOrderByRelationAggregateInput.schema';
import { DoctorCommissionLogOrderByRelationAggregateInputObjectSchema } from './DoctorCommissionLogOrderByRelationAggregateInput.schema';
import { ReportOrderByRelationAggregateInputObjectSchema } from './ReportOrderByRelationAggregateInput.schema';
import { ServiceOrderByWithRelationInputObjectSchema } from './ServiceOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  totalAmount: SortOrderSchema.optional(),
  discount: SortOrderSchema.optional(),
  netAmount: SortOrderSchema.optional(),
  paymentType: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  issuedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenantId: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  doctorId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  serviceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
  customer: z.lazy(() => CustomerOrderByWithRelationInputObjectSchema).optional(),
  doctor: z.lazy(() => DoctorOrderByWithRelationInputObjectSchema).optional(),
  items: z.lazy(() => ReportInvoiceItemOrderByRelationAggregateInputObjectSchema).optional(),
  payments: z.lazy(() => ReportInvoicePaymentOrderByRelationAggregateInputObjectSchema).optional(),
  logs: z.lazy(() => DoctorCommissionLogOrderByRelationAggregateInputObjectSchema).optional(),
  Report: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional(),
  Service: z.lazy(() => ServiceOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ReportInvoiceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReportInvoiceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceOrderByWithRelationInput>;
export const ReportInvoiceOrderByWithRelationInputObjectZodSchema = makeSchema();
