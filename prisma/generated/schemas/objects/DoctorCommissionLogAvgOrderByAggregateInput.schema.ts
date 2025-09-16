import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  commissionAmt: SortOrderSchema.optional()
}).strict();
export const DoctorCommissionLogAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogAvgOrderByAggregateInput>;
export const DoctorCommissionLogAvgOrderByAggregateInputObjectZodSchema = makeSchema();
