import { z } from 'zod';
import { DoctorAddressSelectObjectSchema } from './objects/DoctorAddressSelect.schema';
import { DoctorAddressIncludeObjectSchema } from './objects/DoctorAddressInclude.schema';
import { DoctorAddressCreateInputObjectSchema } from './objects/DoctorAddressCreateInput.schema';
import { DoctorAddressUncheckedCreateInputObjectSchema } from './objects/DoctorAddressUncheckedCreateInput.schema';

export const DoctorAddressCreateOneSchema = z.object({ select: DoctorAddressSelectObjectSchema.optional(), include: DoctorAddressIncludeObjectSchema.optional(), data: z.union([DoctorAddressCreateInputObjectSchema, DoctorAddressUncheckedCreateInputObjectSchema])  })