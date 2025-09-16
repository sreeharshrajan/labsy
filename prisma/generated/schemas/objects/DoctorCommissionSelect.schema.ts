import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorArgsObjectSchema } from './DoctorArgs.schema';
import { DoctorCommissionLogFindManySchema } from '../findManyDoctorCommissionLog.schema';
import { DoctorCommissionCountOutputTypeArgsObjectSchema } from './DoctorCommissionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  commissionType: z.boolean().optional(),
  value: z.boolean().optional(),
  isActive: z.boolean().optional(),
  notes: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  doctorId: z.boolean().optional(),
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional(),
  DoctorCommissionLog: z.union([z.boolean(), z.lazy(() => DoctorCommissionLogFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DoctorCommissionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DoctorCommissionSelectObjectSchema: z.ZodType<Prisma.DoctorCommissionSelect> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionSelect>;
export const DoctorCommissionSelectObjectZodSchema = makeSchema();
