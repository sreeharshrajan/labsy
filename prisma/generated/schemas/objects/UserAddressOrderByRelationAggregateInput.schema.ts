import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const UserAddressOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.UserAddressOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressOrderByRelationAggregateInput>;
export const UserAddressOrderByRelationAggregateInputObjectZodSchema = makeSchema();
