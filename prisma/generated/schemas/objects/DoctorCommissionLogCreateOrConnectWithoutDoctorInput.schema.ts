import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionLogCreateWithoutDoctorInput.schema';
import { DoctorCommissionLogUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionLogUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCommissionLogCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const DoctorCommissionLogCreateOrConnectWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogCreateOrConnectWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogCreateOrConnectWithoutDoctorInput>;
export const DoctorCommissionLogCreateOrConnectWithoutDoctorInputObjectZodSchema = makeSchema();
