import { z } from 'zod';
import { DoctorCommissionUpdateManyMutationInputObjectSchema } from './objects/DoctorCommissionUpdateManyMutationInput.schema';
import { DoctorCommissionWhereInputObjectSchema } from './objects/DoctorCommissionWhereInput.schema';

export const DoctorCommissionUpdateManySchema = z.object({ data: DoctorCommissionUpdateManyMutationInputObjectSchema, where: DoctorCommissionWhereInputObjectSchema.optional()  })