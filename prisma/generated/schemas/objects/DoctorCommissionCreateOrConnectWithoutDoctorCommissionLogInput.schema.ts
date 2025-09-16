import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionWhereUniqueInputObjectSchema } from './DoctorCommissionWhereUniqueInput.schema';
import { DoctorCommissionCreateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionCreateWithoutDoctorCommissionLogInput.schema';
import { DoctorCommissionUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionUncheckedCreateWithoutDoctorCommissionLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCommissionCreateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => DoctorCommissionUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema)])
}).strict();
export const DoctorCommissionCreateOrConnectWithoutDoctorCommissionLogInputObjectSchema: z.ZodType<Prisma.DoctorCommissionCreateOrConnectWithoutDoctorCommissionLogInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionCreateOrConnectWithoutDoctorCommissionLogInput>;
export const DoctorCommissionCreateOrConnectWithoutDoctorCommissionLogInputObjectZodSchema = makeSchema();
