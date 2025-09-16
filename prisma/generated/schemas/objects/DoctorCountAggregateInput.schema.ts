import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  specialization: z.literal(true).optional(),
  email: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  registrationNo: z.literal(true).optional(),
  clinicName: z.literal(true).optional(),
  department: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DoctorCountAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCountAggregateInputType>;
export const DoctorCountAggregateInputObjectZodSchema = makeSchema();
