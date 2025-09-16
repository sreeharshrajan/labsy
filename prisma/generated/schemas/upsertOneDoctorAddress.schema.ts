import { z } from 'zod';
import { DoctorAddressSelectObjectSchema } from './objects/DoctorAddressSelect.schema';
import { DoctorAddressIncludeObjectSchema } from './objects/DoctorAddressInclude.schema';
import { DoctorAddressWhereUniqueInputObjectSchema } from './objects/DoctorAddressWhereUniqueInput.schema';
import { DoctorAddressCreateInputObjectSchema } from './objects/DoctorAddressCreateInput.schema';
import { DoctorAddressUncheckedCreateInputObjectSchema } from './objects/DoctorAddressUncheckedCreateInput.schema';
import { DoctorAddressUpdateInputObjectSchema } from './objects/DoctorAddressUpdateInput.schema';
import { DoctorAddressUncheckedUpdateInputObjectSchema } from './objects/DoctorAddressUncheckedUpdateInput.schema';

export const DoctorAddressUpsertSchema = z.object({ select: DoctorAddressSelectObjectSchema.optional(), include: DoctorAddressIncludeObjectSchema.optional(), where: DoctorAddressWhereUniqueInputObjectSchema, create: z.union([ DoctorAddressCreateInputObjectSchema, DoctorAddressUncheckedCreateInputObjectSchema ]), update: z.union([ DoctorAddressUpdateInputObjectSchema, DoctorAddressUncheckedUpdateInputObjectSchema ])  })