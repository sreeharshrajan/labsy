import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutCustomerInputObjectSchema } from './ReportUpdateWithoutCustomerInput.schema';
import { ReportUncheckedUpdateWithoutCustomerInputObjectSchema } from './ReportUncheckedUpdateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutCustomerInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCustomerInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutCustomerInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutCustomerInput>;
export const ReportUpdateWithWhereUniqueWithoutCustomerInputObjectZodSchema = makeSchema();
