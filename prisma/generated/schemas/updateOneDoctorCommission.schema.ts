import { z } from 'zod';
import { DoctorCommissionSelectObjectSchema } from './objects/DoctorCommissionSelect.schema';
import { DoctorCommissionIncludeObjectSchema } from './objects/DoctorCommissionInclude.schema';
import { DoctorCommissionUpdateInputObjectSchema } from './objects/DoctorCommissionUpdateInput.schema';
import { DoctorCommissionUncheckedUpdateInputObjectSchema } from './objects/DoctorCommissionUncheckedUpdateInput.schema';
import { DoctorCommissionWhereUniqueInputObjectSchema } from './objects/DoctorCommissionWhereUniqueInput.schema';

export const DoctorCommissionUpdateOneSchema = z.object({ select: DoctorCommissionSelectObjectSchema.optional(), include: DoctorCommissionIncludeObjectSchema.optional(), data: z.union([DoctorCommissionUpdateInputObjectSchema, DoctorCommissionUncheckedUpdateInputObjectSchema]), where: DoctorCommissionWhereUniqueInputObjectSchema  })