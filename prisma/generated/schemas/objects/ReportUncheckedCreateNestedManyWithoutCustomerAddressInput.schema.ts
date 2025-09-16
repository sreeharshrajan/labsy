import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutCustomerAddressInputObjectSchema } from './ReportCreateWithoutCustomerAddressInput.schema';
import { ReportUncheckedCreateWithoutCustomerAddressInputObjectSchema } from './ReportUncheckedCreateWithoutCustomerAddressInput.schema';
import { ReportCreateOrConnectWithoutCustomerAddressInputObjectSchema } from './ReportCreateOrConnectWithoutCustomerAddressInput.schema';
import { ReportCreateManyCustomerAddressInputEnvelopeObjectSchema } from './ReportCreateManyCustomerAddressInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCustomerAddressInputObjectSchema), z.lazy(() => ReportCreateWithoutCustomerAddressInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCustomerAddressInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCustomerAddressInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCustomerAddressInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCustomerAddressInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCustomerAddressInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportUncheckedCreateNestedManyWithoutCustomerAddressInputObjectSchema: z.ZodType<Prisma.ReportUncheckedCreateNestedManyWithoutCustomerAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedCreateNestedManyWithoutCustomerAddressInput>;
export const ReportUncheckedCreateNestedManyWithoutCustomerAddressInputObjectZodSchema = makeSchema();
