import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DoctorOrderByWithRelationInputObjectSchema } from './DoctorOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  paymentDate: SortOrderSchema.optional(),
  paymentMethod: SortOrderSchema.optional(),
  referenceNo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  doctorId: SortOrderSchema.optional(),
  doctor: z.lazy(() => DoctorOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const DoctorCommissionPaymentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentOrderByWithRelationInput>;
export const DoctorCommissionPaymentOrderByWithRelationInputObjectZodSchema = makeSchema();
