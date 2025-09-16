import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionWhereUniqueInputObjectSchema } from './DoctorCommissionWhereUniqueInput.schema';
import { DoctorCommissionCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionCreateWithoutDoctorInput.schema';
import { DoctorCommissionUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCommissionCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const DoctorCommissionCreateOrConnectWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionCreateOrConnectWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionCreateOrConnectWithoutDoctorInput>;
export const DoctorCommissionCreateOrConnectWithoutDoctorInputObjectZodSchema = makeSchema();
