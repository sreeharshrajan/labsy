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
  doctorId: z.literal(true).optional()
}).strict();
export const DoctorCommissionMaxAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionMaxAggregateInputType>;
export const DoctorCommissionMaxAggregateInputObjectZodSchema = makeSchema();
