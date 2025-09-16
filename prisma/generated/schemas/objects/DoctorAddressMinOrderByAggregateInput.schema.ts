import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  addressId: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional()
}).strict();
export const DoctorAddressMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DoctorAddressMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressMinOrderByAggregateInput>;
export const DoctorAddressMinOrderByAggregateInputObjectZodSchema = makeSchema();
