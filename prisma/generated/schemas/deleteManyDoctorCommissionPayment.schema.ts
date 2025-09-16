import { z } from 'zod';
import { DoctorCommissionPaymentWhereInputObjectSchema } from './objects/DoctorCommissionPaymentWhereInput.schema';

export const DoctorCommissionPaymentDeleteManySchema = z.object({ where: DoctorCommissionPaymentWhereInputObjectSchema.optional()  })