import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { AddressOrderByWithRelationInputObjectSchema } from './AddressOrderByWithRelationInput.schema';
import { ReportOrderByRelationAggregateInputObjectSchema } from './ReportOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  addressId: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
  address: z.lazy(() => AddressOrderByWithRelationInputObjectSchema).optional(),
  Report: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TenantAddressOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TenantAddressOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressOrderByWithRelationInput>;
export const TenantAddressOrderByWithRelationInputObjectZodSchema = makeSchema();
