import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { DoctorUpdateWithoutDoctorCommissionsInputObjectSchema } from './DoctorUpdateWithoutDoctorCommissionsInput.schema';
import { DoctorUncheckedUpdateWithoutDoctorCommissionsInputObjectSchema } from './DoctorUncheckedUpdateWithoutDoctorCommissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DoctorUpdateWithoutDoctorCommissionsInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutDoctorCommissionsInputObjectSchema)])
}).strict();
export const DoctorUpdateToOneWithWhereWithoutDoctorCommissionsInputObjectSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutDoctorCommissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutDoctorCommissionsInput>;
export const DoctorUpdateToOneWithWhereWithoutDoctorCommissionsInputObjectZodSchema = makeSchema();
