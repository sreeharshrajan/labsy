import { z } from 'zod';
import { DoctorCommissionLogSelectObjectSchema } from './objects/DoctorCommissionLogSelect.schema';
import { DoctorCommissionLogIncludeObjectSchema } from './objects/DoctorCommissionLogInclude.schema';
import { DoctorCommissionLogUpdateInputObjectSchema } from './objects/DoctorCommissionLogUpdateInput.schema';
import { DoctorCommissionLogUncheckedUpdateInputObjectSchema } from './objects/DoctorCommissionLogUncheckedUpdateInput.schema';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './objects/DoctorCommissionLogWhereUniqueInput.schema';

export const DoctorCommissionLogUpdateOneSchema = z.object({ select: DoctorCommissionLogSelectObjectSchema.optional(), include: DoctorCommissionLogIncludeObjectSchema.optional(), data: z.union([DoctorCommissionLogUpdateInputObjectSchema, DoctorCommissionLogUncheckedUpdateInputObjectSchema]), where: DoctorCommissionLogWhereUniqueInputObjectSchema  })