import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogCreateWithoutCommissionInputObjectSchema } from './DoctorCommissionLogCreateWithoutCommissionInput.schema';
import { DoctorCommissionLogUncheckedCreateWithoutCommissionInputObjectSchema } from './DoctorCommissionLogUncheckedCreateWithoutCommissionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCommissionLogCreateWithoutCommissionInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutCommissionInputObjectSchema)])
}).strict();
export const DoctorCommissionLogCreateOrConnectWithoutCommissionInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogCreateOrConnectWithoutCommissionInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogCreateOrConnectWithoutCommissionInput>;
export const DoctorCommissionLogCreateOrConnectWithoutCommissionInputObjectZodSchema = makeSchema();
