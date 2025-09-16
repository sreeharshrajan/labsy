import { z } from 'zod';
import { DoctorCommissionLogSelectObjectSchema } from './objects/DoctorCommissionLogSelect.schema';
import { DoctorCommissionLogCreateManyInputObjectSchema } from './objects/DoctorCommissionLogCreateManyInput.schema';

export const DoctorCommissionLogCreateManyAndReturnSchema = z.object({ select: DoctorCommissionLogSelectObjectSchema.optional(), data: z.union([ DoctorCommissionLogCreateManyInputObjectSchema, z.array(DoctorCommissionLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()