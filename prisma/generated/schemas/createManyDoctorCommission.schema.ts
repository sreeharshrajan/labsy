import { z } from 'zod';
import { DoctorCommissionCreateManyInputObjectSchema } from './objects/DoctorCommissionCreateManyInput.schema';

export const DoctorCommissionCreateManySchema = z.object({ data: z.union([ DoctorCommissionCreateManyInputObjectSchema, z.array(DoctorCommissionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })