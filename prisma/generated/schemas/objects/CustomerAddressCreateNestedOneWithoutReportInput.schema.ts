import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressCreateWithoutReportInputObjectSchema } from './CustomerAddressCreateWithoutReportInput.schema';
import { CustomerAddressUncheckedCreateWithoutReportInputObjectSchema } from './CustomerAddressUncheckedCreateWithoutReportInput.schema';
import { CustomerAddressCreateOrConnectWithoutReportInputObjectSchema } from './CustomerAddressCreateOrConnectWithoutReportInput.schema';
import { CustomerAddressWhereUniqueInputObjectSchema } from './CustomerAddressWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerAddressCreateWithoutReportInputObjectSchema), z.lazy(() => CustomerAddressUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerAddressCreateOrConnectWithoutReportInputObjectSchema).optional(),
  connect: z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema).optional()
}).strict();
export const CustomerAddressCreateNestedOneWithoutReportInputObjectSchema: z.ZodType<Prisma.CustomerAddressCreateNestedOneWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCreateNestedOneWithoutReportInput>;
export const CustomerAddressCreateNestedOneWithoutReportInputObjectZodSchema = makeSchema();
