import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  dateOfBirth: SortOrderSchema.optional(),
  gender: SortOrderSchema.optional(),
  bloodGroup: SortOrderSchema.optional(),
  maritalStatus: SortOrderSchema.optional(),
  aadharNumber: SortOrderSchema.optional(),
  panNumber: SortOrderSchema.optional(),
  passportNumber: SortOrderSchema.optional(),
  knownAllergies: SortOrderSchema.optional(),
  chronicConditions: SortOrderSchema.optional(),
  medications: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional()
}).strict();
export const CustomerCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CustomerCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCountOrderByAggregateInput>;
export const CustomerCountOrderByAggregateInputObjectZodSchema = makeSchema();
