import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateWithoutDoctorCommissionsInputObjectSchema } from './DoctorCreateWithoutDoctorCommissionsInput.schema';
import { DoctorUncheckedCreateWithoutDoctorCommissionsInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorCommissionsInput.schema';
import { DoctorCreateOrConnectWithoutDoctorCommissionsInputObjectSchema } from './DoctorCreateOrConnectWithoutDoctorCommissionsInput.schema';
import { DoctorUpsertWithoutDoctorCommissionsInputObjectSchema } from './DoctorUpsertWithoutDoctorCommissionsInput.schema';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateToOneWithWhereWithoutDoctorCommissionsInputObjectSchema } from './DoctorUpdateToOneWithWhereWithoutDoctorCommissionsInput.schema';
import { DoctorUpdateWithoutDoctorCommissionsInputObjectSchema } from './DoctorUpdateWithoutDoctorCommissionsInput.schema';
import { DoctorUncheckedUpdateWithoutDoctorCommissionsInputObjectSchema } from './DoctorUncheckedUpdateWithoutDoctorCommissionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutDoctorCommissionsInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDoctorCommissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutDoctorCommissionsInputObjectSchema).optional(),
  upsert: z.lazy(() => DoctorUpsertWithoutDoctorCommissionsInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DoctorUpdateToOneWithWhereWithoutDoctorCommissionsInputObjectSchema), z.lazy(() => DoctorUpdateWithoutDoctorCommissionsInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutDoctorCommissionsInputObjectSchema)]).optional()
}).strict();
export const DoctorUpdateOneRequiredWithoutDoctorCommissionsNestedInputObjectSchema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutDoctorCommissionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutDoctorCommissionsNestedInput>;
export const DoctorUpdateOneRequiredWithoutDoctorCommissionsNestedInputObjectZodSchema = makeSchema();
