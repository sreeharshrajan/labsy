import { z } from 'zod';
import { DoctorCommissionPaymentSelectObjectSchema } from './objects/DoctorCommissionPaymentSelect.schema';
import { DoctorCommissionPaymentIncludeObjectSchema } from './objects/DoctorCommissionPaymentInclude.schema';
import { DoctorCommissionPaymentUpdateInputObjectSchema } from './objects/DoctorCommissionPaymentUpdateInput.schema';
import { DoctorCommissionPaymentUncheckedUpdateInputObjectSchema } from './objects/DoctorCommissionPaymentUncheckedUpdateInput.schema';
import { DoctorCommissionPaymentWhereUniqueInputObjectSchema } from './objects/DoctorCommissionPaymentWhereUniqueInput.schema';

export const DoctorCommissionPaymentUpdateOneSchema = z.object({ select: DoctorCommissionPaymentSelectObjectSchema.optional(), include: DoctorCommissionPaymentIncludeObjectSchema.optional(), data: z.union([DoctorCommissionPaymentUpdateInputObjectSchema, DoctorCommissionPaymentUncheckedUpdateInputObjectSchema]), where: DoctorCommissionPaymentWhereUniqueInputObjectSchema  })