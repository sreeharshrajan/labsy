import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogCreateNestedManyWithoutCommissionInputObjectSchema } from './DoctorCommissionLogCreateNestedManyWithoutCommissionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  commissionType: z.string(),
  value: z.number(),
  isActive: z.boolean().optional(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  DoctorCommissionLog: z.lazy(() => DoctorCommissionLogCreateNestedManyWithoutCommissionInputObjectSchema).optional()
}).strict();
export const DoctorCommissionCreateWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionCreateWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionCreateWithoutDoctorInput>;
export const DoctorCommissionCreateWithoutDoctorInputObjectZodSchema = makeSchema();
