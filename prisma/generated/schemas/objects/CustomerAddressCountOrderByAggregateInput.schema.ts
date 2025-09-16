import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  addressId: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const CustomerAddressCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CustomerAddressCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCountOrderByAggregateInput>;
export const CustomerAddressCountOrderByAggregateInputObjectZodSchema = makeSchema();
