import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorUpdateWithoutDoctorPaymentsInputObjectSchema } from './DoctorUpdateWithoutDoctorPaymentsInput.schema';
import { DoctorUncheckedUpdateWithoutDoctorPaymentsInputObjectSchema } from './DoctorUncheckedUpdateWithoutDoctorPaymentsInput.schema';
import { DoctorCreateWithoutDoctorPaymentsInputObjectSchema } from './DoctorCreateWithoutDoctorPaymentsInput.schema';
import { DoctorUncheckedCreateWithoutDoctorPaymentsInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorPaymentsInput.schema';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DoctorUpdateWithoutDoctorPaymentsInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutDoctorPaymentsInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCreateWithoutDoctorPaymentsInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDoctorPaymentsInputObjectSchema)]),
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional()
}).strict();
export const DoctorUpsertWithoutDoctorPaymentsInputObjectSchema: z.ZodType<Prisma.DoctorUpsertWithoutDoctorPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpsertWithoutDoctorPaymentsInput>;
export const DoctorUpsertWithoutDoctorPaymentsInputObjectZodSchema = makeSchema();
