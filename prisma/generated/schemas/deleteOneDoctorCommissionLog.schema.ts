import { z } from 'zod';
import { DoctorCommissionLogSelectObjectSchema } from './objects/DoctorCommissionLogSelect.schema';
import { DoctorCommissionLogIncludeObjectSchema } from './objects/DoctorCommissionLogInclude.schema';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './objects/DoctorCommissionLogWhereUniqueInput.schema';

export const DoctorCommissionLogDeleteOneSchema = z.object({ select: DoctorCommissionLogSelectObjectSchema.optional(), include: DoctorCommissionLogIncludeObjectSchema.optional(), where: DoctorCommissionLogWhereUniqueInputObjectSchema  })