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
export const DoctorAddressCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DoctorAddressCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressCountOrderByAggregateInput>;
export const DoctorAddressCountOrderByAggregateInputObjectZodSchema = makeSchema();
