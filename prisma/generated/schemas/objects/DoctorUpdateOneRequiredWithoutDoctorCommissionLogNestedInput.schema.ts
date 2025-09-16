import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCreateWithoutDoctorCommissionLogInput.schema';
import { DoctorUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorCommissionLogInput.schema';
import { DoctorCreateOrConnectWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCreateOrConnectWithoutDoctorCommissionLogInput.schema';
import { DoctorUpsertWithoutDoctorCommissionLogInputObjectSchema } from './DoctorUpsertWithoutDoctorCommissionLogInput.schema';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateToOneWithWhereWithoutDoctorCommissionLogInputObjectSchema } from './DoctorUpdateToOneWithWhereWithoutDoctorCommissionLogInput.schema';
import { DoctorUpdateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorUpdateWithoutDoctorCommissionLogInput.schema';
import { DoctorUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorUncheckedUpdateWithoutDoctorCommissionLogInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutDoctorCommissionLogInputObjectSchema).optional(),
  upsert: z.lazy(() => DoctorUpsertWithoutDoctorCommissionLogInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DoctorUpdateToOneWithWhereWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => DoctorUpdateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema)]).optional()
}).strict();
export const DoctorUpdateOneRequiredWithoutDoctorCommissionLogNestedInputObjectSchema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutDoctorCommissionLogNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutDoctorCommissionLogNestedInput>;
export const DoctorUpdateOneRequiredWithoutDoctorCommissionLogNestedInputObjectZodSchema = makeSchema();
