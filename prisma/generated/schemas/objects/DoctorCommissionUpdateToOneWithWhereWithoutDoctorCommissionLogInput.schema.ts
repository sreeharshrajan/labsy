import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionWhereInputObjectSchema } from './DoctorCommissionWhereInput.schema';
import { DoctorCommissionUpdateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionUpdateWithoutDoctorCommissionLogInput.schema';
import { DoctorCommissionUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionUncheckedUpdateWithoutDoctorCommissionLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DoctorCommissionUpdateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => DoctorCommissionUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema)])
}).strict();
export const DoctorCommissionUpdateToOneWithWhereWithoutDoctorCommissionLogInputObjectSchema: z.ZodType<Prisma.DoctorCommissionUpdateToOneWithWhereWithoutDoctorCommissionLogInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionUpdateToOneWithWhereWithoutDoctorCommissionLogInput>;
export const DoctorCommissionUpdateToOneWithWhereWithoutDoctorCommissionLogInputObjectZodSchema = makeSchema();
