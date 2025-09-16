import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressUpdateWithoutReportInputObjectSchema } from './CustomerAddressUpdateWithoutReportInput.schema';
import { CustomerAddressUncheckedUpdateWithoutReportInputObjectSchema } from './CustomerAddressUncheckedUpdateWithoutReportInput.schema';
import { CustomerAddressCreateWithoutReportInputObjectSchema } from './CustomerAddressCreateWithoutReportInput.schema';
import { CustomerAddressUncheckedCreateWithoutReportInputObjectSchema } from './CustomerAddressUncheckedCreateWithoutReportInput.schema';
import { CustomerAddressWhereInputObjectSchema } from './CustomerAddressWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CustomerAddressUpdateWithoutReportInputObjectSchema), z.lazy(() => CustomerAddressUncheckedUpdateWithoutReportInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomerAddressCreateWithoutReportInputObjectSchema), z.lazy(() => CustomerAddressUncheckedCreateWithoutReportInputObjectSchema)]),
  where: z.lazy(() => CustomerAddressWhereInputObjectSchema).optional()
}).strict();
export const CustomerAddressUpsertWithoutReportInputObjectSchema: z.ZodType<Prisma.CustomerAddressUpsertWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressUpsertWithoutReportInput>;
export const CustomerAddressUpsertWithoutReportInputObjectZodSchema = makeSchema();
