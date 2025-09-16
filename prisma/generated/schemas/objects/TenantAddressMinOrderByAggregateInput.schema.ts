import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  addressId: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const TenantAddressMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TenantAddressMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressMinOrderByAggregateInput>;
export const TenantAddressMinOrderByAggregateInputObjectZodSchema = makeSchema();
