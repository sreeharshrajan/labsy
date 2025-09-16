import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateNestedOneWithoutDoctorCommissionsInputObjectSchema } from './DoctorCreateNestedOneWithoutDoctorCommissionsInput.schema';
import { DoctorCommissionLogCreateNestedManyWithoutCommissionInputObjectSchema } from './DoctorCommissionLogCreateNestedManyWithoutCommissionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  commissionType: z.string(),
  value: z.number(),
  isActive: z.boolean().optional(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutDoctorCommissionsInputObjectSchema),
  DoctorCommissionLog: z.lazy(() => DoctorCommissionLogCreateNestedManyWithoutCommissionInputObjectSchema)
}).strict();
export const DoctorCommissionCreateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionCreateInput>;
export const DoctorCommissionCreateInputObjectZodSchema = makeSchema();
