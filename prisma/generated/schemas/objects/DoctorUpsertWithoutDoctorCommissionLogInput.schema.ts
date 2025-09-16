import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorUpdateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorUpdateWithoutDoctorCommissionLogInput.schema';
import { DoctorUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorUncheckedUpdateWithoutDoctorCommissionLogInput.schema';
import { DoctorCreateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCreateWithoutDoctorCommissionLogInput.schema';
import { DoctorUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorCommissionLogInput.schema';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DoctorUpdateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCreateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema)]),
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional()
}).strict();
export const DoctorUpsertWithoutDoctorCommissionLogInputObjectSchema: z.ZodType<Prisma.DoctorUpsertWithoutDoctorCommissionLogInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpsertWithoutDoctorCommissionLogInput>;
export const DoctorUpsertWithoutDoctorCommissionLogInputObjectZodSchema = makeSchema();
