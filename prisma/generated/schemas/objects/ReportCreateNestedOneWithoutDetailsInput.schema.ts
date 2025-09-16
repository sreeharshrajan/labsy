import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutDetailsInputObjectSchema } from './ReportCreateWithoutDetailsInput.schema';
import { ReportUncheckedCreateWithoutDetailsInputObjectSchema } from './ReportUncheckedCreateWithoutDetailsInput.schema';
import { ReportCreateOrConnectWithoutDetailsInputObjectSchema } from './ReportCreateOrConnectWithoutDetailsInput.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutDetailsInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutDetailsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutDetailsInputObjectSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReportCreateNestedOneWithoutDetailsInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedOneWithoutDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateNestedOneWithoutDetailsInput>;
export const ReportCreateNestedOneWithoutDetailsInputObjectZodSchema = makeSchema();
