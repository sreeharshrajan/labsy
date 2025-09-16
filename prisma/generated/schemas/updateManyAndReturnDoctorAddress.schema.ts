import { z } from 'zod';
import { DoctorAddressSelectObjectSchema } from './objects/DoctorAddressSelect.schema';
import { DoctorAddressUpdateManyMutationInputObjectSchema } from './objects/DoctorAddressUpdateManyMutationInput.schema';
import { DoctorAddressWhereInputObjectSchema } from './objects/DoctorAddressWhereInput.schema';

export const DoctorAddressUpdateManyAndReturnSchema = z.object({ select: DoctorAddressSelectObjectSchema.optional(), data: DoctorAddressUpdateManyMutationInputObjectSchema, where: DoctorAddressWhereInputObjectSchema.optional()  }).strict()