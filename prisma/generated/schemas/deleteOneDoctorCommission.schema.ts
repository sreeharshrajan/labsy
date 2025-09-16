import { z } from 'zod';
import { DoctorCommissionSelectObjectSchema } from './objects/DoctorCommissionSelect.schema';
import { DoctorCommissionIncludeObjectSchema } from './objects/DoctorCommissionInclude.schema';
import { DoctorCommissionWhereUniqueInputObjectSchema } from './objects/DoctorCommissionWhereUniqueInput.schema';

export const DoctorCommissionDeleteOneSchema = z.object({ select: DoctorCommissionSelectObjectSchema.optional(), include: DoctorCommissionIncludeObjectSchema.optional(), where: DoctorCommissionWhereUniqueInputObjectSchema  })