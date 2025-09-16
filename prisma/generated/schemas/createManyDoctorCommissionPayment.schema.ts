import { z } from 'zod';
import { DoctorCommissionPaymentCreateManyInputObjectSchema } from './objects/DoctorCommissionPaymentCreateManyInput.schema';

export const DoctorCommissionPaymentCreateManySchema = z.object({ data: z.union([ DoctorCommissionPaymentCreateManyInputObjectSchema, z.array(DoctorCommissionPaymentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })