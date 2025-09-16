import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutCustomerInputObjectSchema } from './ReportCreateWithoutCustomerInput.schema';
import { ReportUncheckedCreateWithoutCustomerInputObjectSchema } from './ReportUncheckedCreateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutCustomerInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCustomerInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutCustomerInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutCustomerInput>;
export const ReportCreateOrConnectWithoutCustomerInputObjectZodSchema = makeSchema();
