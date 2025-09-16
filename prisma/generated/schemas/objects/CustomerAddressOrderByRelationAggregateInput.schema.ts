import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CustomerAddressOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CustomerAddressOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressOrderByRelationAggregateInput>;
export const CustomerAddressOrderByRelationAggregateInputObjectZodSchema = makeSchema();
