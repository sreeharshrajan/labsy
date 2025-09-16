import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { CustomerUpdateWithoutReportInputObjectSchema } from './CustomerUpdateWithoutReportInput.schema';
import { CustomerUncheckedUpdateWithoutReportInputObjectSchema } from './CustomerUncheckedUpdateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CustomerUpdateWithoutReportInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutReportInputObjectSchema)])
}).strict();
export const CustomerUpdateToOneWithWhereWithoutReportInputObjectSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutReportInput>;
export const CustomerUpdateToOneWithWhereWithoutReportInputObjectZodSchema = makeSchema();
