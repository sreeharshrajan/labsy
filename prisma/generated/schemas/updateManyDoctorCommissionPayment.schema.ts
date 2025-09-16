import { z } from 'zod';
import { DoctorCommissionPaymentUpdateManyMutationInputObjectSchema } from './objects/DoctorCommissionPaymentUpdateManyMutationInput.schema';
import { DoctorCommissionPaymentWhereInputObjectSchema } from './objects/DoctorCommissionPaymentWhereInput.schema';

export const DoctorCommissionPaymentUpdateManySchema = z.object({ data: DoctorCommissionPaymentUpdateManyMutationInputObjectSchema, where: DoctorCommissionPaymentWhereInputObjectSchema.optional()  })