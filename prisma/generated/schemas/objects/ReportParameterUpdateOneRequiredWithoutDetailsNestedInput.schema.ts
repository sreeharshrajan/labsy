import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportParameterCreateWithoutDetailsInputObjectSchema } from './ReportParameterCreateWithoutDetailsInput.schema';
import { ReportParameterUncheckedCreateWithoutDetailsInputObjectSchema } from './ReportParameterUncheckedCreateWithoutDetailsInput.schema';
import { ReportParameterCreateOrConnectWithoutDetailsInputObjectSchema } from './ReportParameterCreateOrConnectWithoutDetailsInput.schema';
import { ReportParameterUpsertWithoutDetailsInputObjectSchema } from './ReportParameterUpsertWithoutDetailsInput.schema';
import { ReportParameterWhereUniqueInputObjectSchema } from './ReportParameterWhereUniqueInput.schema';
import { ReportParameterUpdateToOneWithWhereWithoutDetailsInputObjectSchema } from './ReportParameterUpdateToOneWithWhereWithoutDetailsInput.schema';
import { ReportParameterUpdateWithoutDetailsInputObjectSchema } from './ReportParameterUpdateWithoutDetailsInput.schema';
import { ReportParameterUncheckedUpdateWithoutDetailsInputObjectSchema } from './ReportParameterUncheckedUpdateWithoutDetailsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportParameterCreateWithoutDetailsInputObjectSchema), z.lazy(() => ReportParameterUncheckedCreateWithoutDetailsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportParameterCreateOrConnectWithoutDetailsInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportParameterUpsertWithoutDetailsInputObjectSchema).optional(),
  connect: z.lazy(() => ReportParameterWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportParameterUpdateToOneWithWhereWithoutDetailsInputObjectSchema), z.lazy(() => ReportParameterUpdateWithoutDetailsInputObjectSchema), z.lazy(() => ReportParameterUncheckedUpdateWithoutDetailsInputObjectSchema)]).optional()
}).strict();
export const ReportParameterUpdateOneRequiredWithoutDetailsNestedInputObjectSchema: z.ZodType<Prisma.ReportParameterUpdateOneRequiredWithoutDetailsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterUpdateOneRequiredWithoutDetailsNestedInput>;
export const ReportParameterUpdateOneRequiredWithoutDetailsNestedInputObjectZodSchema = makeSchema();
