import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutCustomerInputObjectSchema } from './ReportUpdateWithoutCustomerInput.schema';
import { ReportUncheckedUpdateWithoutCustomerInputObjectSchema } from './ReportUncheckedUpdateWithoutCustomerInput.schema';
import { ReportCreateWithoutCustomerInputObjectSchema } from './ReportCreateWithoutCustomerInput.schema';
import { ReportUncheckedCreateWithoutCustomerInputObjectSchema } from './ReportUncheckedCreateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutCustomerInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCustomerInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutCustomerInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCustomerInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutCustomerInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutCustomerInput>;
export const ReportUpsertWithWhereUniqueWithoutCustomerInputObjectZodSchema = makeSchema();
