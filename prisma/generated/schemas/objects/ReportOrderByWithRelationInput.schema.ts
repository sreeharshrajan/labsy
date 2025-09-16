import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { CustomerOrderByWithRelationInputObjectSchema } from './CustomerOrderByWithRelationInput.schema';
import { DoctorOrderByWithRelationInputObjectSchema } from './DoctorOrderByWithRelationInput.schema';
import { ReportInvoiceOrderByWithRelationInputObjectSchema } from './ReportInvoiceOrderByWithRelationInput.schema';
import { ReportDetailOrderByRelationAggregateInputObjectSchema } from './ReportDetailOrderByRelationAggregateInput.schema';
import { ReportChangeLogOrderByRelationAggregateInputObjectSchema } from './ReportChangeLogOrderByRelationAggregateInput.schema';
import { TenantUserOrderByWithRelationInputObjectSchema } from './TenantUserOrderByWithRelationInput.schema';
import { CustomerAddressOrderByWithRelationInputObjectSchema } from './CustomerAddressOrderByWithRelationInput.schema';
import { TenantAddressOrderByWithRelationInputObjectSchema } from './TenantAddressOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  reportCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  fileUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  collectedPlace: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  customerType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  issuedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  collectedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  version: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  doctorId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  invoiceId: SortOrderSchema.optional(),
  createdBy: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  collectedBy: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  customerAddressId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  labAddressId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
  customer: z.lazy(() => CustomerOrderByWithRelationInputObjectSchema).optional(),
  doctor: z.lazy(() => DoctorOrderByWithRelationInputObjectSchema).optional(),
  invoice: z.lazy(() => ReportInvoiceOrderByWithRelationInputObjectSchema).optional(),
  details: z.lazy(() => ReportDetailOrderByRelationAggregateInputObjectSchema).optional(),
  updateLog: z.lazy(() => ReportChangeLogOrderByRelationAggregateInputObjectSchema).optional(),
  createdByUser: z.lazy(() => TenantUserOrderByWithRelationInputObjectSchema).optional(),
  collectedByUser: z.lazy(() => TenantUserOrderByWithRelationInputObjectSchema).optional(),
  customerAddress: z.lazy(() => CustomerAddressOrderByWithRelationInputObjectSchema).optional(),
  labAddress: z.lazy(() => TenantAddressOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ReportOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReportOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportOrderByWithRelationInput>;
export const ReportOrderByWithRelationInputObjectZodSchema = makeSchema();
