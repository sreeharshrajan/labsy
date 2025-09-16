import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutReportInputObjectSchema } from './CustomerCreateWithoutReportInput.schema';
import { CustomerUncheckedCreateWithoutReportInputObjectSchema } from './CustomerUncheckedCreateWithoutReportInput.schema';
import { CustomerCreateOrConnectWithoutReportInputObjectSchema } from './CustomerCreateOrConnectWithoutReportInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutReportInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutReportInputObjectSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional()
}).strict();
export const CustomerCreateNestedOneWithoutReportInputObjectSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateNestedOneWithoutReportInput>;
export const CustomerCreateNestedOneWithoutReportInputObjectZodSchema = makeSchema();
