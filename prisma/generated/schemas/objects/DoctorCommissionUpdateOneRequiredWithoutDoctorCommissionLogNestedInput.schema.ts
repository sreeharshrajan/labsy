import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionCreateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionCreateWithoutDoctorCommissionLogInput.schema';
import { DoctorCommissionUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionUncheckedCreateWithoutDoctorCommissionLogInput.schema';
import { DoctorCommissionCreateOrConnectWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionCreateOrConnectWithoutDoctorCommissionLogInput.schema';
import { DoctorCommissionUpsertWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionUpsertWithoutDoctorCommissionLogInput.schema';
import { DoctorCommissionWhereUniqueInputObjectSchema } from './DoctorCommissionWhereUniqueInput.schema';
import { DoctorCommissionUpdateToOneWithWhereWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionUpdateToOneWithWhereWithoutDoctorCommissionLogInput.schema';
import { DoctorCommissionUpdateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionUpdateWithoutDoctorCommissionLogInput.schema';
import { DoctorCommissionUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema } from './DoctorCommissionUncheckedUpdateWithoutDoctorCommissionLogInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCommissionCreateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => DoctorCommissionUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCommissionCreateOrConnectWithoutDoctorCommissionLogInputObjectSchema).optional(),
  upsert: z.lazy(() => DoctorCommissionUpsertWithoutDoctorCommissionLogInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorCommissionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DoctorCommissionUpdateToOneWithWhereWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => DoctorCommissionUpdateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => DoctorCommissionUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema)]).optional()
}).strict();
export const DoctorCommissionUpdateOneRequiredWithoutDoctorCommissionLogNestedInputObjectSchema: z.ZodType<Prisma.DoctorCommissionUpdateOneRequiredWithoutDoctorCommissionLogNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionUpdateOneRequiredWithoutDoctorCommissionLogNestedInput>;
export const DoctorCommissionUpdateOneRequiredWithoutDoctorCommissionLogNestedInputObjectZodSchema = makeSchema();
