import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutLabAddressInputObjectSchema } from './ReportCreateWithoutLabAddressInput.schema';
import { ReportUncheckedCreateWithoutLabAddressInputObjectSchema } from './ReportUncheckedCreateWithoutLabAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutLabAddressInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutLabAddressInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutLabAddressInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutLabAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutLabAddressInput>;
export const ReportCreateOrConnectWithoutLabAddressInputObjectZodSchema = makeSchema();
