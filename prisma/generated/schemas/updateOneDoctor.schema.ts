import { z } from 'zod';
import { DoctorSelectObjectSchema } from './objects/DoctorSelect.schema';
import { DoctorIncludeObjectSchema } from './objects/DoctorInclude.schema';
import { DoctorUpdateInputObjectSchema } from './objects/DoctorUpdateInput.schema';
import { DoctorUncheckedUpdateInputObjectSchema } from './objects/DoctorUncheckedUpdateInput.schema';
import { DoctorWhereUniqueInputObjectSchema } from './objects/DoctorWhereUniqueInput.schema';

export const DoctorUpdateOneSchema = z.object({ select: DoctorSelectObjectSchema.optional(), include: DoctorIncludeObjectSchema.optional(), data: z.union([DoctorUpdateInputObjectSchema, DoctorUncheckedUpdateInputObjectSchema]), where: DoctorWhereUniqueInputObjectSchema  })