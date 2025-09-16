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
export const TenantAddressCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TenantAddressCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressCountOrderByAggregateInput>;
export const TenantAddressCountOrderByAggregateInputObjectZodSchema = makeSchema();
