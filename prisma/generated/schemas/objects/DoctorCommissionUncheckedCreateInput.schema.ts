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
  deletedAt: z.coerce.date().optional().nullable(),
  doctorId: z.string(),
  DoctorCommissionLog: z.lazy(() => DoctorCommissionLogUncheckedCreateNestedManyWithoutCommissionInputObjectSchema)
}).strict();
export const DoctorCommissionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionUncheckedCreateInput>;
export const DoctorCommissionUncheckedCreateInputObjectZodSchema = makeSchema();
