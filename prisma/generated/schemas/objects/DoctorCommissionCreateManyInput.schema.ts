import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  commissionType: z.string(),
  value: z.number(),
  isActive: z.boolean().optional(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  doctorId: z.string()
}).strict();
export const DoctorCommissionCreateManyInputObjectSchema: z.ZodType<Prisma.DoctorCommissionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionCreateManyInput>;
export const DoctorCommissionCreateManyInputObjectZodSchema = makeSchema();
