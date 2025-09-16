import { z } from 'zod';
import { DoctorCommissionSelectObjectSchema } from './objects/DoctorCommissionSelect.schema';
import { DoctorCommissionCreateManyInputObjectSchema } from './objects/DoctorCommissionCreateManyInput.schema';

export const DoctorCommissionCreateManyAndReturnSchema = z.object({ select: DoctorCommissionSelectObjectSchema.optional(), data: z.union([ DoctorCommissionCreateManyInputObjectSchema, z.array(DoctorCommissionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()