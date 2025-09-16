import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { DoctorUpdateWithoutDoctorPaymentsInputObjectSchema } from './DoctorUpdateWithoutDoctorPaymentsInput.schema';
import { DoctorUncheckedUpdateWithoutDoctorPaymentsInputObjectSchema } from './DoctorUncheckedUpdateWithoutDoctorPaymentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DoctorUpdateWithoutDoctorPaymentsInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutDoctorPaymentsInputObjectSchema)])
}).strict();
export const DoctorUpdateToOneWithWhereWithoutDoctorPaymentsInputObjectSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutDoctorPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutDoctorPaymentsInput>;
export const DoctorUpdateToOneWithWhereWithoutDoctorPaymentsInputObjectZodSchema = makeSchema();
