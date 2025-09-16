import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutLabAddressInputObjectSchema } from './ReportUpdateWithoutLabAddressInput.schema';
import { ReportUncheckedUpdateWithoutLabAddressInputObjectSchema } from './ReportUncheckedUpdateWithoutLabAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutLabAddressInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutLabAddressInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutLabAddressInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutLabAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutLabAddressInput>;
export const ReportUpdateWithWhereUniqueWithoutLabAddressInputObjectZodSchema = makeSchema();
