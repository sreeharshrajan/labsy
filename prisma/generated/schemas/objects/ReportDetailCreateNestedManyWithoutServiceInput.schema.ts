import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailCreateWithoutServiceInputObjectSchema } from './ReportDetailCreateWithoutServiceInput.schema';
import { ReportDetailUncheckedCreateWithoutServiceInputObjectSchema } from './ReportDetailUncheckedCreateWithoutServiceInput.schema';
import { ReportDetailCreateOrConnectWithoutServiceInputObjectSchema } from './ReportDetailCreateOrConnectWithoutServiceInput.schema';
import { ReportDetailCreateManyServiceInputEnvelopeObjectSchema } from './ReportDetailCreateManyServiceInputEnvelope.schema';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportDetailCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportDetailCreateWithoutServiceInputObjectSchema).array(), z.lazy(() => ReportDetailUncheckedCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutServiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportDetailCreateOrConnectWithoutServiceInputObjectSchema), z.lazy(() => ReportDetailCreateOrConnectWithoutServiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportDetailCreateManyServiceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportDetailCreateNestedManyWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportDetailCreateNestedManyWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailCreateNestedManyWithoutServiceInput>;
export const ReportDetailCreateNestedManyWithoutServiceInputObjectZodSchema = makeSchema();
