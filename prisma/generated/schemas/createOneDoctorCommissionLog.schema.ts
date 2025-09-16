import { z } from 'zod';
import { DoctorCommissionLogSelectObjectSchema } from './objects/DoctorCommissionLogSelect.schema';
import { DoctorCommissionLogIncludeObjectSchema } from './objects/DoctorCommissionLogInclude.schema';
import { DoctorCommissionLogCreateInputObjectSchema } from './objects/DoctorCommissionLogCreateInput.schema';
import { DoctorCommissionLogUncheckedCreateInputObjectSchema } from './objects/DoctorCommissionLogUncheckedCreateInput.schema';

export const DoctorCommissionLogCreateOneSchema = z.object({ select: DoctorCommissionLogSelectObjectSchema.optional(), include: DoctorCommissionLogIncludeObjectSchema.optional(), data: z.union([DoctorCommissionLogCreateInputObjectSchema, DoctorCommissionLogUncheckedCreateInputObjectSchema])  })