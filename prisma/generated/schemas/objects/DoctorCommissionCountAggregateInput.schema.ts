import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  commissionType: z.literal(true).optional(),
  value: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  doctorId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DoctorCommissionCountAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionCountAggregateInputType>;
export const DoctorCommissionCountAggregateInputObjectZodSchema = makeSchema();
