import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TenantAddressCountOrderByAggregateInputObjectSchema } from './TenantAddressCountOrderByAggregateInput.schema';
import { TenantAddressMaxOrderByAggregateInputObjectSchema } from './TenantAddressMaxOrderByAggregateInput.schema';
import { TenantAddressMinOrderByAggregateInputObjectSchema } from './TenantAddressMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  addressId: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => TenantAddressCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TenantAddressMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TenantAddressMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TenantAddressOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TenantAddressOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressOrderByWithAggregationInput>;
export const TenantAddressOrderByWithAggregationInputObjectZodSchema = makeSchema();
