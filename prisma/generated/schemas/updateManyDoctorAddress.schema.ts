import { z } from 'zod';
import { DoctorAddressUpdateManyMutationInputObjectSchema } from './objects/DoctorAddressUpdateManyMutationInput.schema';
import { DoctorAddressWhereInputObjectSchema } from './objects/DoctorAddressWhereInput.schema';

export const DoctorAddressUpdateManySchema = z.object({ data: DoctorAddressUpdateManyMutationInputObjectSchema, where: DoctorAddressWhereInputObjectSchema.optional()  })