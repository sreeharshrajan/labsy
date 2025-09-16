import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressWhereUniqueInputObjectSchema } from './CustomerAddressWhereUniqueInput.schema';
import { CustomerAddressCreateWithoutReportInputObjectSchema } from './CustomerAddressCreateWithoutReportInput.schema';
import { CustomerAddressUncheckedCreateWithoutReportInputObjectSchema } from './CustomerAddressUncheckedCreateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomerAddressCreateWithoutReportInputObjectSchema), z.lazy(() => CustomerAddressUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const CustomerAddressCreateOrConnectWithoutReportInputObjectSchema: z.ZodType<Prisma.CustomerAddressCreateOrConnectWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCreateOrConnectWithoutReportInput>;
export const CustomerAddressCreateOrConnectWithoutReportInputObjectZodSchema = makeSchema();
