import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  DoctorCommissionLog: z.boolean().optional()
}).strict();
export const DoctorCommissionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DoctorCommissionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionCountOutputTypeSelect>;
export const DoctorCommissionCountOutputTypeSelectObjectZodSchema = makeSchema();
