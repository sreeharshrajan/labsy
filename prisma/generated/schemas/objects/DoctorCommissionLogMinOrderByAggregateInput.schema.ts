import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  invoiceId: SortOrderSchema.optional(),
  commissionId: SortOrderSchema.optional(),
  reportDetailId: SortOrderSchema.optional(),
  commissionAmt: SortOrderSchema.optional(),
  commissionStatus: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const DoctorCommissionLogMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogMinOrderByAggregateInput>;
export const DoctorCommissionLogMinOrderByAggregateInputObjectZodSchema = makeSchema();
