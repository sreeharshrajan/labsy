import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorCreateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCreateWithoutDoctorCommissionLogInput.schema';
import { DoctorUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorCommissionLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCreateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema)])
}).strict();
export const DoctorCreateOrConnectWithoutDoctorCommissionLogInputObjectSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutDoctorCommissionLogInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateOrConnectWithoutDoctorCommissionLogInput>;
export const DoctorCreateOrConnectWithoutDoctorCommissionLogInputObjectZodSchema = makeSchema();
