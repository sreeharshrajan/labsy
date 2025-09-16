import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCreateWithoutDoctorCommissionLogInput.schema';
import { DoctorUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorCommissionLogInput.schema';
import { DoctorCreateOrConnectWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCreateOrConnectWithoutDoctorCommissionLogInput.schema';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutDoctorCommissionLogInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional()
}).strict();
export const DoctorCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutDoctorCommissionLogInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateNestedOneWithoutDoctorCommissionLogInput>;
export const DoctorCreateNestedOneWithoutDoctorCommissionLogInputObjectZodSchema = makeSchema();
