import { z } from 'zod';
import { DoctorAddressSelectObjectSchema } from './objects/DoctorAddressSelect.schema';
import { DoctorAddressIncludeObjectSchema } from './objects/DoctorAddressInclude.schema';
import { DoctorAddressUpdateInputObjectSchema } from './objects/DoctorAddressUpdateInput.schema';
import { DoctorAddressUncheckedUpdateInputObjectSchema } from './objects/DoctorAddressUncheckedUpdateInput.schema';
import { DoctorAddressWhereUniqueInputObjectSchema } from './objects/DoctorAddressWhereUniqueInput.schema';

export const DoctorAddressUpdateOneSchema = z.object({ select: DoctorAddressSelectObjectSchema.optional(), include: DoctorAddressIncludeObjectSchema.optional(), data: z.union([DoctorAddressUpdateInputObjectSchema, DoctorAddressUncheckedUpdateInputObjectSchema]), where: DoctorAddressWhereUniqueInputObjectSchema  })