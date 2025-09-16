import { z } from 'zod';
import { DoctorAddressSelectObjectSchema } from './objects/DoctorAddressSelect.schema';
import { DoctorAddressCreateManyInputObjectSchema } from './objects/DoctorAddressCreateManyInput.schema';

export const DoctorAddressCreateManyAndReturnSchema = z.object({ select: DoctorAddressSelectObjectSchema.optional(), data: z.union([ DoctorAddressCreateManyInputObjectSchema, z.array(DoctorAddressCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()