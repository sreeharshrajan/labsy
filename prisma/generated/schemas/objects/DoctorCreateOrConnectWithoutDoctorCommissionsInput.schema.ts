import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorCreateWithoutDoctorCommissionsInputObjectSchema } from './DoctorCreateWithoutDoctorCommissionsInput.schema';
import { DoctorUncheckedCreateWithoutDoctorCommissionsInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorCommissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCreateWithoutDoctorCommissionsInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDoctorCommissionsInputObjectSchema)])
}).strict();
export const DoctorCreateOrConnectWithoutDoctorCommissionsInputObjectSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutDoctorCommissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateOrConnectWithoutDoctorCommissionsInput>;
export const DoctorCreateOrConnectWithoutDoctorCommissionsInputObjectZodSchema = makeSchema();
