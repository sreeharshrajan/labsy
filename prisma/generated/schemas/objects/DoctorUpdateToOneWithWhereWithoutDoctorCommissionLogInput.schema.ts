import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { DoctorUpdateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorUpdateWithoutDoctorCommissionLogInput.schema';
import { DoctorUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorUncheckedUpdateWithoutDoctorCommissionLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DoctorUpdateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema)])
}).strict();
export const DoctorUpdateToOneWithWhereWithoutDoctorCommissionLogInputObjectSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutDoctorCommissionLogInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutDoctorCommissionLogInput>;
export const DoctorUpdateToOneWithWhereWithoutDoctorCommissionLogInputObjectZodSchema = makeSchema();
