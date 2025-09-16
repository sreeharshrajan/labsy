import { z } from 'zod';
import { DoctorSelectObjectSchema } from './objects/DoctorSelect.schema';
import { DoctorIncludeObjectSchema } from './objects/DoctorInclude.schema';
import { DoctorCreateInputObjectSchema } from './objects/DoctorCreateInput.schema';
import { DoctorUncheckedCreateInputObjectSchema } from './objects/DoctorUncheckedCreateInput.schema';

export const DoctorCreateOneSchema = z.object({ select: DoctorSelectObjectSchema.optional(), include: DoctorIncludeObjectSchema.optional(), data: z.union([DoctorCreateInputObjectSchema, DoctorUncheckedCreateInputObjectSchema])  })