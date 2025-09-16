import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutCustomerAddressInputObjectSchema } from './ReportCreateWithoutCustomerAddressInput.schema';
import { ReportUncheckedCreateWithoutCustomerAddressInputObjectSchema } from './ReportUncheckedCreateWithoutCustomerAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutCustomerAddressInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCustomerAddressInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutCustomerAddressInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutCustomerAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutCustomerAddressInput>;
export const ReportCreateOrConnectWithoutCustomerAddressInputObjectZodSchema = makeSchema();
