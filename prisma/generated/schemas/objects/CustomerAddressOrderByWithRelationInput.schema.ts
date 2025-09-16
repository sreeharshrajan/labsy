import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CustomerOrderByWithRelationInputObjectSchema } from './CustomerOrderByWithRelationInput.schema';
import { AddressOrderByWithRelationInputObjectSchema } from './AddressOrderByWithRelationInput.schema';
import { ReportOrderByRelationAggregateInputObjectSchema } from './ReportOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  addressId: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  customer: z.lazy(() => CustomerOrderByWithRelationInputObjectSchema).optional(),
  address: z.lazy(() => AddressOrderByWithRelationInputObjectSchema).optional(),
  Report: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CustomerAddressOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CustomerAddressOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressOrderByWithRelationInput>;
export const CustomerAddressOrderByWithRelationInputObjectZodSchema = makeSchema();
