import { z } from 'zod';
import { DoctorCommissionPaymentSelectObjectSchema } from './objects/DoctorCommissionPaymentSelect.schema';
import { DoctorCommissionPaymentIncludeObjectSchema } from './objects/DoctorCommissionPaymentInclude.schema';
import { DoctorCommissionPaymentWhereUniqueInputObjectSchema } from './objects/DoctorCommissionPaymentWhereUniqueInput.schema';

export const DoctorCommissionPaymentDeleteOneSchema = z.object({ select: DoctorCommissionPaymentSelectObjectSchema.optional(), include: DoctorCommissionPaymentIncludeObjectSchema.optional(), where: DoctorCommissionPaymentWhereUniqueInputObjectSchema  })