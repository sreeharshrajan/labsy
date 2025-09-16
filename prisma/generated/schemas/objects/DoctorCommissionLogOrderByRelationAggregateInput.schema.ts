import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const DoctorCommissionLogOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogOrderByRelationAggregateInput>;
export const DoctorCommissionLogOrderByRelationAggregateInputObjectZodSchema = makeSchema();
