import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DoctorOrderByWithRelationInputObjectSchema } from './DoctorOrderByWithRelationInput.schema';
import { DoctorCommissionLogOrderByRelationAggregateInputObjectSchema } from './DoctorCommissionLogOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  commissionType: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  doctorId: SortOrderSchema.optional(),
  doctor: z.lazy(() => DoctorOrderByWithRelationInputObjectSchema).optional(),
  DoctorCommissionLog: z.lazy(() => DoctorCommissionLogOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const DoctorCommissionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DoctorCommissionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionOrderByWithRelationInput>;
export const DoctorCommissionOrderByWithRelationInputObjectZodSchema = makeSchema();
