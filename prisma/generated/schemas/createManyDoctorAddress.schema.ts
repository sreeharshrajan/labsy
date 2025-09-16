import { z } from 'zod';
import { DoctorAddressCreateManyInputObjectSchema } from './objects/DoctorAddressCreateManyInput.schema';

export const DoctorAddressCreateManySchema = z.object({ data: z.union([ DoctorAddressCreateManyInputObjectSchema, z.array(DoctorAddressCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })