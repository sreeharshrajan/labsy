import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  identifier: SortOrderSchema.optional(),
  expires: SortOrderSchema.optional(),
  token: SortOrderSchema.optional()
}).strict();
export const VerificationTokenMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VerificationTokenMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VerificationTokenMaxOrderByAggregateInput>;
export const VerificationTokenMaxOrderByAggregateInputObjectZodSchema = makeSchema();
