import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  paymentDate: SortOrderSchema.optional(),
  paymentMethod: SortOrderSchema.optional(),
  referenceNo: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional()
}).strict();
export const DoctorCommissionPaymentCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentCountOrderByAggregateInput>;
export const DoctorCommissionPaymentCountOrderByAggregateInputObjectZodSchema = makeSchema();
