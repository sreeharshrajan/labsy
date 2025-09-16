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
export const CustomerAddressMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CustomerAddressMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressMaxOrderByAggregateInput>;
export const CustomerAddressMaxOrderByAggregateInputObjectZodSchema = makeSchema();
