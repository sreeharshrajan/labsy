import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateWithoutDoctorPaymentsInputObjectSchema } from './DoctorCreateWithoutDoctorPaymentsInput.schema';
import { DoctorUncheckedCreateWithoutDoctorPaymentsInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorPaymentsInput.schema';
import { DoctorCreateOrConnectWithoutDoctorPaymentsInputObjectSchema } from './DoctorCreateOrConnectWithoutDoctorPaymentsInput.schema';
import { DoctorUpsertWithoutDoctorPaymentsInputObjectSchema } from './DoctorUpsertWithoutDoctorPaymentsInput.schema';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateToOneWithWhereWithoutDoctorPaymentsInputObjectSchema } from './DoctorUpdateToOneWithWhereWithoutDoctorPaymentsInput.schema';
import { DoctorUpdateWithoutDoctorPaymentsInputObjectSchema } from './DoctorUpdateWithoutDoctorPaymentsInput.schema';
import { DoctorUncheckedUpdateWithoutDoctorPaymentsInputObjectSchema } from './DoctorUncheckedUpdateWithoutDoctorPaymentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutDoctorPaymentsInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDoctorPaymentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutDoctorPaymentsInputObjectSchema).optional(),
  upsert: z.lazy(() => DoctorUpsertWithoutDoctorPaymentsInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DoctorUpdateToOneWithWhereWithoutDoctorPaymentsInputObjectSchema), z.lazy(() => DoctorUpdateWithoutDoctorPaymentsInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutDoctorPaymentsInputObjectSchema)]).optional()
}).strict();
export const DoctorUpdateOneRequiredWithoutDoctorPaymentsNestedInputObjectSchema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutDoctorPaymentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutDoctorPaymentsNestedInput>;
export const DoctorUpdateOneRequiredWithoutDoctorPaymentsNestedInputObjectZodSchema = makeSchema();
