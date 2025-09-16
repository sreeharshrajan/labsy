import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionUpdateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionUpdateWithoutDoctorCommissionLogInput.schema';
import { DoctorCommissionUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionUncheckedUpdateWithoutDoctorCommissionLogInput.schema';
import { DoctorCommissionCreateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionCreateWithoutDoctorCommissionLogInput.schema';
import { DoctorCommissionUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionUncheckedCreateWithoutDoctorCommissionLogInput.schema';
import { DoctorCommissionWhereInputObjectSchema } from './DoctorCommissionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DoctorCommissionUpdateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => DoctorCommissionUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCommissionCreateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => DoctorCommissionUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema)]),
  where: z.lazy(() => DoctorCommissionWhereInputObjectSchema).optional()
}).strict();
export const DoctorCommissionUpsertWithoutDoctorCommissionLogInputObjectSchema: z.ZodType<Prisma.DoctorCommissionUpsertWithoutDoctorCommissionLogInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionUpsertWithoutDoctorCommissionLogInput>;
export const DoctorCommissionUpsertWithoutDoctorCommissionLogInputObjectZodSchema = makeSchema();
