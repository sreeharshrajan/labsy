import { z } from 'zod';
import { DoctorCommissionLogSelectObjectSchema } from './objects/DoctorCommissionLogSelect.schema';
import { DoctorCommissionLogIncludeObjectSchema } from './objects/DoctorCommissionLogInclude.schema';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './objects/DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogCreateInputObjectSchema } from './objects/DoctorCommissionLogCreateInput.schema';
import { DoctorCommissionLogUncheckedCreateInputObjectSchema } from './objects/DoctorCommissionLogUncheckedCreateInput.schema';
import { DoctorCommissionLogUpdateInputObjectSchema } from './objects/DoctorCommissionLogUpdateInput.schema';
import { DoctorCommissionLogUncheckedUpdateInputObjectSchema } from './objects/DoctorCommissionLogUncheckedUpdateInput.schema';

export const DoctorCommissionLogUpsertSchema = z.object({ select: DoctorCommissionLogSelectObjectSchema.optional(), include: DoctorCommissionLogIncludeObjectSchema.optional(), where: DoctorCommissionLogWhereUniqueInputObjectSchema, create: z.union([ DoctorCommissionLogCreateInputObjectSchema, DoctorCommissionLogUncheckedCreateInputObjectSchema ]), update: z.union([ DoctorCommissionLogUpdateInputObjectSchema, DoctorCommissionLogUncheckedUpdateInputObjectSchema ])  })