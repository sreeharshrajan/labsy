import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportParameterWhereUniqueInputObjectSchema } from './ReportParameterWhereUniqueInput.schema';
import { ReportParameterUpdateWithoutTemplateInputObjectSchema } from './ReportParameterUpdateWithoutTemplateInput.schema';
import { ReportParameterUncheckedUpdateWithoutTemplateInputObjectSchema } from './ReportParameterUncheckedUpdateWithoutTemplateInput.schema';
import { ReportParameterCreateWithoutTemplateInputObjectSchema } from './ReportParameterCreateWithoutTemplateInput.schema';
import { ReportParameterUncheckedCreateWithoutTemplateInputObjectSchema } from './ReportParameterUncheckedCreateWithoutTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportParameterWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportParameterUpdateWithoutTemplateInputObjectSchema), z.lazy(() => ReportParameterUncheckedUpdateWithoutTemplateInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportParameterCreateWithoutTemplateInputObjectSchema), z.lazy(() => ReportParameterUncheckedCreateWithoutTemplateInputObjectSchema)])
}).strict();
export const ReportParameterUpsertWithWhereUniqueWithoutTemplateInputObjectSchema: z.ZodType<Prisma.ReportParameterUpsertWithWhereUniqueWithoutTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterUpsertWithWhereUniqueWithoutTemplateInput>;
export const ReportParameterUpsertWithWhereUniqueWithoutTemplateInputObjectZodSchema = makeSchema();
