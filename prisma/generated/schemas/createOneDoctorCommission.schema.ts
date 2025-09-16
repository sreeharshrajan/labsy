import { z } from 'zod';
import { DoctorCommissionSelectObjectSchema } from './objects/DoctorCommissionSelect.schema';
import { DoctorCommissionIncludeObjectSchema } from './objects/DoctorCommissionInclude.schema';
import { DoctorCommissionCreateInputObjectSchema } from './objects/DoctorCommissionCreateInput.schema';
import { DoctorCommissionUncheckedCreateInputObjectSchema } from './objects/DoctorCommissionUncheckedCreateInput.schema';

export const DoctorCommissionCreateOneSchema = z.object({ select: DoctorCommissionSelectObjectSchema.optional(), include: DoctorCommissionIncludeObjectSchema.optional(), data: z.union([DoctorCommissionCreateInputObjectSchema, DoctorCommissionUncheckedCreateInputObjectSchema])  })