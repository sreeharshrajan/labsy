import { z } from 'zod';
import { DoctorCommissionPaymentSelectObjectSchema } from './objects/DoctorCommissionPaymentSelect.schema';
import { DoctorCommissionPaymentUpdateManyMutationInputObjectSchema } from './objects/DoctorCommissionPaymentUpdateManyMutationInput.schema';
import { DoctorCommissionPaymentWhereInputObjectSchema } from './objects/DoctorCommissionPaymentWhereInput.schema';

export const DoctorCommissionPaymentUpdateManyAndReturnSchema = z.object({ select: DoctorCommissionPaymentSelectObjectSchema.optional(), data: DoctorCommissionPaymentUpdateManyMutationInputObjectSchema, where: DoctorCommissionPaymentWhereInputObjectSchema.optional()  }).strict()