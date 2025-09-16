import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateWithoutDoctorCommissionsInputObjectSchema } from './DoctorCreateWithoutDoctorCommissionsInput.schema';
import { DoctorUncheckedCreateWithoutDoctorCommissionsInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorCommissionsInput.schema';
import { DoctorCreateOrConnectWithoutDoctorCommissionsInputObjectSchema } from './DoctorCreateOrConnectWithoutDoctorCommissionsInput.schema';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutDoctorCommissionsInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDoctorCommissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutDoctorCommissionsInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional()
}).strict();
export const DoctorCreateNestedOneWithoutDoctorCommissionsInputObjectSchema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutDoctorCommissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateNestedOneWithoutDoctorCommissionsInput>;
export const DoctorCreateNestedOneWithoutDoctorCommissionsInputObjectZodSchema = makeSchema();
