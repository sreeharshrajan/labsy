import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  commissionType: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional()
}).strict();
export const DoctorCommissionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionMaxOrderByAggregateInput>;
export const DoctorCommissionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
