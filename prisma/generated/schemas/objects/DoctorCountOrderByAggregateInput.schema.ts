import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  specialization: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  registrationNo: SortOrderSchema.optional(),
  clinicName: SortOrderSchema.optional(),
  department: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional()
}).strict();
export const DoctorCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCountOrderByAggregateInput>;
export const DoctorCountOrderByAggregateInputObjectZodSchema = makeSchema();
