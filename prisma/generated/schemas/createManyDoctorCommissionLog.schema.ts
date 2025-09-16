import { z } from 'zod';
import { DoctorCommissionLogCreateManyInputObjectSchema } from './objects/DoctorCommissionLogCreateManyInput.schema';

export const DoctorCommissionLogCreateManySchema = z.object({ data: z.union([ DoctorCommissionLogCreateManyInputObjectSchema, z.array(DoctorCommissionLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })