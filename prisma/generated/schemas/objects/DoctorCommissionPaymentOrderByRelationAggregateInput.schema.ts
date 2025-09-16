import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const DoctorCommissionPaymentOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentOrderByRelationAggregateInput>;
export const DoctorCommissionPaymentOrderByRelationAggregateInputObjectZodSchema = makeSchema();
