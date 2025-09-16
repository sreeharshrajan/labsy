import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorArgsObjectSchema } from './DoctorArgs.schema'

const makeSchema = () => z.object({
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional()
}).strict();
export const DoctorCommissionPaymentIncludeObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentInclude> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentInclude>;
export const DoctorCommissionPaymentIncludeObjectZodSchema = makeSchema();
