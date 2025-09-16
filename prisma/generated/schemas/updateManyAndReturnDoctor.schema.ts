import { z } from 'zod';
import { DoctorSelectObjectSchema } from './objects/DoctorSelect.schema';
import { DoctorUpdateManyMutationInputObjectSchema } from './objects/DoctorUpdateManyMutationInput.schema';
import { DoctorWhereInputObjectSchema } from './objects/DoctorWhereInput.schema';

export const DoctorUpdateManyAndReturnSchema = z.object({ select: DoctorSelectObjectSchema.optional(), data: DoctorUpdateManyMutationInputObjectSchema, where: DoctorWhereInputObjectSchema.optional()  }).strict()