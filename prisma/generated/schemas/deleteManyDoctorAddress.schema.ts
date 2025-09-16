import { z } from 'zod';
import { DoctorAddressWhereInputObjectSchema } from './objects/DoctorAddressWhereInput.schema';

export const DoctorAddressDeleteManySchema = z.object({ where: DoctorAddressWhereInputObjectSchema.optional()  })