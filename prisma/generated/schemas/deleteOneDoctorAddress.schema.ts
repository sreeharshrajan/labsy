import { z } from 'zod';
import { DoctorAddressSelectObjectSchema } from './objects/DoctorAddressSelect.schema';
import { DoctorAddressIncludeObjectSchema } from './objects/DoctorAddressInclude.schema';
import { DoctorAddressWhereUniqueInputObjectSchema } from './objects/DoctorAddressWhereUniqueInput.schema';

export const DoctorAddressDeleteOneSchema = z.object({ select: DoctorAddressSelectObjectSchema.optional(), include: DoctorAddressIncludeObjectSchema.optional(), where: DoctorAddressWhereUniqueInputObjectSchema  })