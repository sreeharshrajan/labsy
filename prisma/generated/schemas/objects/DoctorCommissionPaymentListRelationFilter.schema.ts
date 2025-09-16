import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionPaymentWhereInputObjectSchema } from './DoctorCommissionPaymentWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => DoctorCommissionPaymentWhereInputObjectSchema).optional(),
  some: z.lazy(() => DoctorCommissionPaymentWhereInputObjectSchema).optional(),
  none: z.lazy(() => DoctorCommissionPaymentWhereInputObjectSchema).optional()
}).strict();
export const DoctorCommissionPaymentListRelationFilterObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentListRelationFilter>;
export const DoctorCommissionPaymentListRelationFilterObjectZodSchema = makeSchema();
