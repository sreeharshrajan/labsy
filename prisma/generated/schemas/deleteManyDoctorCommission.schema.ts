import { z } from 'zod';
import { DoctorCommissionWhereInputObjectSchema } from './objects/DoctorCommissionWhereInput.schema';

export const DoctorCommissionDeleteManySchema = z.object({ where: DoctorCommissionWhereInputObjectSchema.optional()  })