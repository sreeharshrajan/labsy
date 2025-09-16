import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorUpdateWithoutDoctorCommissionsInputObjectSchema } from './DoctorUpdateWithoutDoctorCommissionsInput.schema';
import { DoctorUncheckedUpdateWithoutDoctorCommissionsInputObjectSchema } from './DoctorUncheckedUpdateWithoutDoctorCommissionsInput.schema';
import { DoctorCreateWithoutDoctorCommissionsInputObjectSchema } from './DoctorCreateWithoutDoctorCommissionsInput.schema';
import { DoctorUncheckedCreateWithoutDoctorCommissionsInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorCommissionsInput.schema';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DoctorUpdateWithoutDoctorCommissionsInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutDoctorCommissionsInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCreateWithoutDoctorCommissionsInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDoctorCommissionsInputObjectSchema)]),
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional()
}).strict();
export const DoctorUpsertWithoutDoctorCommissionsInputObjectSchema: z.ZodType<Prisma.DoctorUpsertWithoutDoctorCommissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpsertWithoutDoctorCommissionsInput>;
export const DoctorUpsertWithoutDoctorCommissionsInputObjectZodSchema = makeSchema();
