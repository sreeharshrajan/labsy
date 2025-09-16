import { z } from 'zod';
import { DoctorSelectObjectSchema } from './objects/DoctorSelect.schema';
import { DoctorIncludeObjectSchema } from './objects/DoctorInclude.schema';
import { DoctorWhereUniqueInputObjectSchema } from './objects/DoctorWhereUniqueInput.schema';
import { DoctorCreateInputObjectSchema } from './objects/DoctorCreateInput.schema';
import { DoctorUncheckedCreateInputObjectSchema } from './objects/DoctorUncheckedCreateInput.schema';
import { DoctorUpdateInputObjectSchema } from './objects/DoctorUpdateInput.schema';
import { DoctorUncheckedUpdateInputObjectSchema } from './objects/DoctorUncheckedUpdateInput.schema';

export const DoctorUpsertSchema = z.object({ select: DoctorSelectObjectSchema.optional(), include: DoctorIncludeObjectSchema.optional(), where: DoctorWhereUniqueInputObjectSchema, create: z.union([ DoctorCreateInputObjectSchema, DoctorUncheckedCreateInputObjectSchema ]), update: z.union([ DoctorUpdateInputObjectSchema, DoctorUncheckedUpdateInputObjectSchema ])  })