import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateWithoutReportInputObjectSchema } from './DoctorCreateWithoutReportInput.schema';
import { DoctorUncheckedCreateWithoutReportInputObjectSchema } from './DoctorUncheckedCreateWithoutReportInput.schema';
import { DoctorCreateOrConnectWithoutReportInputObjectSchema } from './DoctorCreateOrConnectWithoutReportInput.schema';
import { DoctorUpsertWithoutReportInputObjectSchema } from './DoctorUpsertWithoutReportInput.schema';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateToOneWithWhereWithoutReportInputObjectSchema } from './DoctorUpdateToOneWithWhereWithoutReportInput.schema';
import { DoctorUpdateWithoutReportInputObjectSchema } from './DoctorUpdateWithoutReportInput.schema';
import { DoctorUncheckedUpdateWithoutReportInputObjectSchema } from './DoctorUncheckedUpdateWithoutReportInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutReportInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutReportInputObjectSchema).optional(),
  upsert: z.lazy(() => DoctorUpsertWithoutReportInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => DoctorWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => DoctorWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DoctorUpdateToOneWithWhereWithoutReportInputObjectSchema), z.lazy(() => DoctorUpdateWithoutReportInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutReportInputObjectSchema)]).optional()
}).strict();
export const DoctorUpdateOneWithoutReportNestedInputObjectSchema: z.ZodType<Prisma.DoctorUpdateOneWithoutReportNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateOneWithoutReportNestedInput>;
export const DoctorUpdateOneWithoutReportNestedInputObjectZodSchema = makeSchema();
