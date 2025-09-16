import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutCustomerAddressInputObjectSchema } from './ReportUpdateWithoutCustomerAddressInput.schema';
import { ReportUncheckedUpdateWithoutCustomerAddressInputObjectSchema } from './ReportUncheckedUpdateWithoutCustomerAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutCustomerAddressInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCustomerAddressInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutCustomerAddressInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutCustomerAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutCustomerAddressInput>;
export const ReportUpdateWithWhereUniqueWithoutCustomerAddressInputObjectZodSchema = makeSchema();
