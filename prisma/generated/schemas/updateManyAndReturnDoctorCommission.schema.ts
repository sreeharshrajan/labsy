import { z } from 'zod';
import { DoctorCommissionSelectObjectSchema } from './objects/DoctorCommissionSelect.schema';
import { DoctorCommissionUpdateManyMutationInputObjectSchema } from './objects/DoctorCommissionUpdateManyMutationInput.schema';
import { DoctorCommissionWhereInputObjectSchema } from './objects/DoctorCommissionWhereInput.schema';

export const DoctorCommissionUpdateManyAndReturnSchema = z.object({ select: DoctorCommissionSelectObjectSchema.optional(), data: DoctorCommissionUpdateManyMutationInputObjectSchema, where: DoctorCommissionWhereInputObjectSchema.optional()  }).strict()