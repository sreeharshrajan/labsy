import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutReportInputObjectSchema } from './CustomerCreateWithoutReportInput.schema';
import { CustomerUncheckedCreateWithoutReportInputObjectSchema } from './CustomerUncheckedCreateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomerCreateWithoutReportInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const CustomerCreateOrConnectWithoutReportInputObjectSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateOrConnectWithoutReportInput>;
export const CustomerCreateOrConnectWithoutReportInputObjectZodSchema = makeSchema();
