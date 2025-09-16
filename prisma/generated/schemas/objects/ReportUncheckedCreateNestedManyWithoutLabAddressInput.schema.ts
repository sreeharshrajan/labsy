import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutLabAddressInputObjectSchema } from './ReportCreateWithoutLabAddressInput.schema';
import { ReportUncheckedCreateWithoutLabAddressInputObjectSchema } from './ReportUncheckedCreateWithoutLabAddressInput.schema';
import { ReportCreateOrConnectWithoutLabAddressInputObjectSchema } from './ReportCreateOrConnectWithoutLabAddressInput.schema';
import { ReportCreateManyLabAddressInputEnvelopeObjectSchema } from './ReportCreateManyLabAddressInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutLabAddressInputObjectSchema), z.lazy(() => ReportCreateWithoutLabAddressInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutLabAddressInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutLabAddressInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutLabAddressInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutLabAddressInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyLabAddressInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportUncheckedCreateNestedManyWithoutLabAddressInputObjectSchema: z.ZodType<Prisma.ReportUncheckedCreateNestedManyWithoutLabAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedCreateNestedManyWithoutLabAddressInput>;
export const ReportUncheckedCreateNestedManyWithoutLabAddressInputObjectZodSchema = makeSchema();
