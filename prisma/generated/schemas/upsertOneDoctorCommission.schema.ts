import { z } from 'zod';
import { DoctorCommissionSelectObjectSchema } from './objects/DoctorCommissionSelect.schema';
import { DoctorCommissionIncludeObjectSchema } from './objects/DoctorCommissionInclude.schema';
import { DoctorCommissionWhereUniqueInputObjectSchema } from './objects/DoctorCommissionWhereUniqueInput.schema';
import { DoctorCommissionCreateInputObjectSchema } from './objects/DoctorCommissionCreateInput.schema';
import { DoctorCommissionUncheckedCreateInputObjectSchema } from './objects/DoctorCommissionUncheckedCreateInput.schema';
import { DoctorCommissionUpdateInputObjectSchema } from './objects/DoctorCommissionUpdateInput.schema';
import { DoctorCommissionUncheckedUpdateInputObjectSchema } from './objects/DoctorCommissionUncheckedUpdateInput.schema';

export const DoctorCommissionUpsertSchema = z.object({ select: DoctorCommissionSelectObjectSchema.optional(), include: DoctorCommissionIncludeObjectSchema.optional(), where: DoctorCommissionWhereUniqueInputObjectSchema, create: z.union([ DoctorCommissionCreateInputObjectSchema, DoctorCommissionUncheckedCreateInputObjectSchema ]), update: z.union([ DoctorCommissionUpdateInputObjectSchema, DoctorCommissionUncheckedUpdateInputObjectSchema ])  })