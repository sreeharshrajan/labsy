import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutCustomerAddressInputObjectSchema } from './ReportUpdateWithoutCustomerAddressInput.schema';
import { ReportUncheckedUpdateWithoutCustomerAddressInputObjectSchema } from './ReportUncheckedUpdateWithoutCustomerAddressInput.schema';
import { ReportCreateWithoutCustomerAddressInputObjectSchema } from './ReportCreateWithoutCustomerAddressInput.schema';
import { ReportUncheckedCreateWithoutCustomerAddressInputObjectSchema } from './ReportUncheckedCreateWithoutCustomerAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutCustomerAddressInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCustomerAddressInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutCustomerAddressInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCustomerAddressInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutCustomerAddressInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutCustomerAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutCustomerAddressInput>;
export const ReportUpsertWithWhereUniqueWithoutCustomerAddressInputObjectZodSchema = makeSchema();
