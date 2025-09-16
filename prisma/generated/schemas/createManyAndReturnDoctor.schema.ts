import { z } from 'zod';
import { DoctorSelectObjectSchema } from './objects/DoctorSelect.schema';
import { DoctorCreateManyInputObjectSchema } from './objects/DoctorCreateManyInput.schema';

export const DoctorCreateManyAndReturnSchema = z.object({ select: DoctorSelectObjectSchema.optional(), data: z.union([ DoctorCreateManyInputObjectSchema, z.array(DoctorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()