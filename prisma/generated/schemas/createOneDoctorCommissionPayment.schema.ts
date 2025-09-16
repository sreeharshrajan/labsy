import { z } from 'zod';
import { DoctorCommissionPaymentSelectObjectSchema } from './objects/DoctorCommissionPaymentSelect.schema';
import { DoctorCommissionPaymentIncludeObjectSchema } from './objects/DoctorCommissionPaymentInclude.schema';
import { DoctorCommissionPaymentCreateInputObjectSchema } from './objects/DoctorCommissionPaymentCreateInput.schema';
import { DoctorCommissionPaymentUncheckedCreateInputObjectSchema } from './objects/DoctorCommissionPaymentUncheckedCreateInput.schema';

export const DoctorCommissionPaymentCreateOneSchema = z.object({ select: DoctorCommissionPaymentSelectObjectSchema.optional(), include: DoctorCommissionPaymentIncludeObjectSchema.optional(), data: z.union([DoctorCommissionPaymentCreateInputObjectSchema, DoctorCommissionPaymentUncheckedCreateInputObjectSchema])  })