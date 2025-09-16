import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { ReportInvoiceOrderByRelationAggregateInputObjectSchema } from './ReportInvoiceOrderByRelationAggregateInput.schema';
import { ReportOrderByRelationAggregateInputObjectSchema } from './ReportOrderByRelationAggregateInput.schema';
import { CustomerAddressOrderByRelationAggregateInputObjectSchema } from './CustomerAddressOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dateOfBirth: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  gender: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  bloodGroup: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  maritalStatus: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  aadharNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  panNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  passportNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  knownAllergies: SortOrderSchema.optional(),
  chronicConditions: SortOrderSchema.optional(),
  medications: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenantId: SortOrderSchema.optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
  ReportInvoice: z.lazy(() => ReportInvoiceOrderByRelationAggregateInputObjectSchema).optional(),
  Report: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional(),
  customerAddresses: z.lazy(() => CustomerAddressOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CustomerOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CustomerOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerOrderByWithRelationInput>;
export const CustomerOrderByWithRelationInputObjectZodSchema = makeSchema();
