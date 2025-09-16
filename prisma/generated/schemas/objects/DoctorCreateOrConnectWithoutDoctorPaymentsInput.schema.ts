import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorCreateWithoutDoctorPaymentsInputObjectSchema } from './DoctorCreateWithoutDoctorPaymentsInput.schema';
import { DoctorUncheckedCreateWithoutDoctorPaymentsInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorPaymentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCreateWithoutDoctorPaymentsInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDoctorPaymentsInputObjectSchema)])
}).strict();
export const DoctorCreateOrConnectWithoutDoctorPaymentsInputObjectSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutDoctorPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateOrConnectWithoutDoctorPaymentsInput>;
export const DoctorCreateOrConnectWithoutDoctorPaymentsInputObjectZodSchema = makeSchema();
