import { z } from 'zod';
import { DoctorSelectObjectSchema } from './objects/DoctorSelect.schema';
import { DoctorIncludeObjectSchema } from './objects/DoctorInclude.schema';
import { DoctorWhereUniqueInputObjectSchema } from './objects/DoctorWhereUniqueInput.schema';

export const DoctorDeleteOneSchema = z.object({ select: DoctorSelectObjectSchema.optional(), include: DoctorIncludeObjectSchema.optional(), where: DoctorWhereUniqueInputObjectSchema  })