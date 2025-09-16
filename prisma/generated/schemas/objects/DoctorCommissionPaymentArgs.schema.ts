import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionPaymentSelectObjectSchema } from './DoctorCommissionPaymentSelect.schema';
import { DoctorCommissionPaymentIncludeObjectSchema } from './DoctorCommissionPaymentInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DoctorCommissionPaymentSelectObjectSchema).optional(),
  include: z.lazy(() => DoctorCommissionPaymentIncludeObjectSchema).optional()
}).strict();
export const DoctorCommissionPaymentArgsObjectSchema = makeSchema();
export const DoctorCommissionPaymentArgsObjectZodSchema = makeSchema();
