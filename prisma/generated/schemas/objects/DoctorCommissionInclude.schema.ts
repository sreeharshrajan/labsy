import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorArgsObjectSchema } from './DoctorArgs.schema';
import { DoctorCommissionLogFindManySchema } from '../findManyDoctorCommissionLog.schema';
import { DoctorCommissionCountOutputTypeArgsObjectSchema } from './DoctorCommissionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional(),
  DoctorCommissionLog: z.union([z.boolean(), z.lazy(() => DoctorCommissionLogFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DoctorCommissionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DoctorCommissionIncludeObjectSchema: z.ZodType<Prisma.DoctorCommissionInclude> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionInclude>;
export const DoctorCommissionIncludeObjectZodSchema = makeSchema();
