import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutLabAddressInputObjectSchema } from './ReportUpdateWithoutLabAddressInput.schema';
import { ReportUncheckedUpdateWithoutLabAddressInputObjectSchema } from './ReportUncheckedUpdateWithoutLabAddressInput.schema';
import { ReportCreateWithoutLabAddressInputObjectSchema } from './ReportCreateWithoutLabAddressInput.schema';
import { ReportUncheckedCreateWithoutLabAddressInputObjectSchema } from './ReportUncheckedCreateWithoutLabAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutLabAddressInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutLabAddressInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutLabAddressInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutLabAddressInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutLabAddressInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutLabAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutLabAddressInput>;
export const ReportUpsertWithWhereUniqueWithoutLabAddressInputObjectZodSchema = makeSchema();
