import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionCreateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionCreateWithoutDoctorCommissionLogInput.schema';
import { DoctorCommissionUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionUncheckedCreateWithoutDoctorCommissionLogInput.schema';
import { DoctorCommissionCreateOrConnectWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionCreateOrConnectWithoutDoctorCommissionLogInput.schema';
import { DoctorCommissionWhereUniqueInputObjectSchema } from './DoctorCommissionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCommissionCreateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => DoctorCommissionUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCommissionCreateOrConnectWithoutDoctorCommissionLogInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorCommissionWhereUniqueInputObjectSchema).optional()
}).strict();
export const DoctorCommissionCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema: z.ZodType<Prisma.DoctorCommissionCreateNestedOneWithoutDoctorCommissionLogInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionCreateNestedOneWithoutDoctorCommissionLogInput>;
export const DoctorCommissionCreateNestedOneWithoutDoctorCommissionLogInputObjectZodSchema = makeSchema();
