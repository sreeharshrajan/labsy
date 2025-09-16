import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressWhereInputObjectSchema } from './CustomerAddressWhereInput.schema';
import { CustomerAddressUpdateWithoutReportInputObjectSchema } from './CustomerAddressUpdateWithoutReportInput.schema';
import { CustomerAddressUncheckedUpdateWithoutReportInputObjectSchema } from './CustomerAddressUncheckedUpdateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerAddressWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CustomerAddressUpdateWithoutReportInputObjectSchema), z.lazy(() => CustomerAddressUncheckedUpdateWithoutReportInputObjectSchema)])
}).strict();
export const CustomerAddressUpdateToOneWithWhereWithoutReportInputObjectSchema: z.ZodType<Prisma.CustomerAddressUpdateToOneWithWhereWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressUpdateToOneWithWhereWithoutReportInput>;
export const CustomerAddressUpdateToOneWithWhereWithoutReportInputObjectZodSchema = makeSchema();
