import { z } from 'zod';
import { DoctorCommissionLogWhereInputObjectSchema } from './objects/DoctorCommissionLogWhereInput.schema';

export const DoctorCommissionLogDeleteManySchema = z.object({ where: DoctorCommissionLogWhereInputObjectSchema.optional()  })