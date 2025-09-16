import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogUncheckedCreateNestedManyWithoutCommissionInputObjectSchema } from './DoctorCommissionLogUncheckedCreateNestedManyWithoutCommissionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  commissionType: z.string(),
  value: z.number(),
  isActive: z.boolean().optional(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  DoctorCommissionLog: z.lazy(() => DoctorCommissionLogUncheckedCreateNestedManyWithoutCommissionInputObjectSchema).optional()
}).strict();
export const DoctorCommissionUncheckedCreateWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionUncheckedCreateWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionUncheckedCreateWithoutDoctorInput>;
export const DoctorCommissionUncheckedCreateWithoutDoctorInputObjectZodSchema = makeSchema();
