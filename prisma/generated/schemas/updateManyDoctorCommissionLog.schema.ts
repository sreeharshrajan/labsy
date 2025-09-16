import { z } from 'zod';
import { DoctorCommissionLogUpdateManyMutationInputObjectSchema } from './objects/DoctorCommissionLogUpdateManyMutationInput.schema';
import { DoctorCommissionLogWhereInputObjectSchema } from './objects/DoctorCommissionLogWhereInput.schema';

export const DoctorCommissionLogUpdateManySchema = z.object({ data: DoctorCommissionLogUpdateManyMutationInputObjectSchema, where: DoctorCommissionLogWhereInputObjectSchema.optional()  })