import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateWithoutDoctorPaymentsInputObjectSchema } from './DoctorCreateWithoutDoctorPaymentsInput.schema';
import { DoctorUncheckedCreateWithoutDoctorPaymentsInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorPaymentsInput.schema';
import { DoctorCreateOrConnectWithoutDoctorPaymentsInputObjectSchema } from './DoctorCreateOrConnectWithoutDoctorPaymentsInput.schema';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutDoctorPaymentsInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDoctorPaymentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutDoctorPaymentsInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional()
}).strict();
export const DoctorCreateNestedOneWithoutDoctorPaymentsInputObjectSchema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutDoctorPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateNestedOneWithoutDoctorPaymentsInput>;
export const DoctorCreateNestedOneWithoutDoctorPaymentsInputObjectZodSchema = makeSchema();
