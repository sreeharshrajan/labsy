import { z } from 'zod';
import { DoctorCommissionLogSelectObjectSchema } from './objects/DoctorCommissionLogSelect.schema';
import { DoctorCommissionLogUpdateManyMutationInputObjectSchema } from './objects/DoctorCommissionLogUpdateManyMutationInput.schema';
import { DoctorCommissionLogWhereInputObjectSchema } from './objects/DoctorCommissionLogWhereInput.schema';

export const DoctorCommissionLogUpdateManyAndReturnSchema = z.object({ select: DoctorCommissionLogSelectObjectSchema.optional(), data: DoctorCommissionLogUpdateManyMutationInputObjectSchema, where: DoctorCommissionLogWhereInputObjectSchema.optional()  }).strict()