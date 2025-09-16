import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerUpdateWithoutReportInputObjectSchema } from './CustomerUpdateWithoutReportInput.schema';
import { CustomerUncheckedUpdateWithoutReportInputObjectSchema } from './CustomerUncheckedUpdateWithoutReportInput.schema';
import { CustomerCreateWithoutReportInputObjectSchema } from './CustomerCreateWithoutReportInput.schema';
import { CustomerUncheckedCreateWithoutReportInputObjectSchema } from './CustomerUncheckedCreateWithoutReportInput.schema';
import { CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CustomerUpdateWithoutReportInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutReportInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomerCreateWithoutReportInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutReportInputObjectSchema)]),
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional()
}).strict();
export const CustomerUpsertWithoutReportInputObjectSchema: z.ZodType<Prisma.CustomerUpsertWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpsertWithoutReportInput>;
export const CustomerUpsertWithoutReportInputObjectZodSchema = makeSchema();
