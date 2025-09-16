import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressCreateWithoutReportInputObjectSchema } from './CustomerAddressCreateWithoutReportInput.schema';
import { CustomerAddressUncheckedCreateWithoutReportInputObjectSchema } from './CustomerAddressUncheckedCreateWithoutReportInput.schema';
import { CustomerAddressCreateOrConnectWithoutReportInputObjectSchema } from './CustomerAddressCreateOrConnectWithoutReportInput.schema';
import { CustomerAddressUpsertWithoutReportInputObjectSchema } from './CustomerAddressUpsertWithoutReportInput.schema';
import { CustomerAddressWhereInputObjectSchema } from './CustomerAddressWhereInput.schema';
import { CustomerAddressWhereUniqueInputObjectSchema } from './CustomerAddressWhereUniqueInput.schema';
import { CustomerAddressUpdateToOneWithWhereWithoutReportInputObjectSchema } from './CustomerAddressUpdateToOneWithWhereWithoutReportInput.schema';
import { CustomerAddressUpdateWithoutReportInputObjectSchema } from './CustomerAddressUpdateWithoutReportInput.schema';
import { CustomerAddressUncheckedUpdateWithoutReportInputObjectSchema } from './CustomerAddressUncheckedUpdateWithoutReportInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerAddressCreateWithoutReportInputObjectSchema), z.lazy(() => CustomerAddressUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerAddressCreateOrConnectWithoutReportInputObjectSchema).optional(),
  upsert: z.lazy(() => CustomerAddressUpsertWithoutReportInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => CustomerAddressWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => CustomerAddressWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CustomerAddressUpdateToOneWithWhereWithoutReportInputObjectSchema), z.lazy(() => CustomerAddressUpdateWithoutReportInputObjectSchema), z.lazy(() => CustomerAddressUncheckedUpdateWithoutReportInputObjectSchema)]).optional()
}).strict();
export const CustomerAddressUpdateOneWithoutReportNestedInputObjectSchema: z.ZodType<Prisma.CustomerAddressUpdateOneWithoutReportNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressUpdateOneWithoutReportNestedInput>;
export const CustomerAddressUpdateOneWithoutReportNestedInputObjectZodSchema = makeSchema();
