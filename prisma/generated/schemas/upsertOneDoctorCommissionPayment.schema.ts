import { z } from 'zod';
import { DoctorCommissionPaymentSelectObjectSchema } from './objects/DoctorCommissionPaymentSelect.schema';
import { DoctorCommissionPaymentIncludeObjectSchema } from './objects/DoctorCommissionPaymentInclude.schema';
import { DoctorCommissionPaymentWhereUniqueInputObjectSchema } from './objects/DoctorCommissionPaymentWhereUniqueInput.schema';
import { DoctorCommissionPaymentCreateInputObjectSchema } from './objects/DoctorCommissionPaymentCreateInput.schema';
import { DoctorCommissionPaymentUncheckedCreateInputObjectSchema } from './objects/DoctorCommissionPaymentUncheckedCreateInput.schema';
import { DoctorCommissionPaymentUpdateInputObjectSchema } from './objects/DoctorCommissionPaymentUpdateInput.schema';
import { DoctorCommissionPaymentUncheckedUpdateInputObjectSchema } from './objects/DoctorCommissionPaymentUncheckedUpdateInput.schema';

export const DoctorCommissionPaymentUpsertSchema = z.object({ select: DoctorCommissionPaymentSelectObjectSchema.optional(), include: DoctorCommissionPaymentIncludeObjectSchema.optional(), where: DoctorCommissionPaymentWhereUniqueInputObjectSchema, create: z.union([ DoctorCommissionPaymentCreateInputObjectSchema, DoctorCommissionPaymentUncheckedCreateInputObjectSchema ]), update: z.union([ DoctorCommissionPaymentUpdateInputObjectSchema, DoctorCommissionPaymentUncheckedUpdateInputObjectSchema ])  })