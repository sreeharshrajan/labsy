import { z } from 'zod';
import { DoctorCommissionPaymentSelectObjectSchema } from './objects/DoctorCommissionPaymentSelect.schema';
import { DoctorCommissionPaymentCreateManyInputObjectSchema } from './objects/DoctorCommissionPaymentCreateManyInput.schema';

export const DoctorCommissionPaymentCreateManyAndReturnSchema = z.object({ select: DoctorCommissionPaymentSelectObjectSchema.optional(), data: z.union([ DoctorCommissionPaymentCreateManyInputObjectSchema, z.array(DoctorCommissionPaymentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()