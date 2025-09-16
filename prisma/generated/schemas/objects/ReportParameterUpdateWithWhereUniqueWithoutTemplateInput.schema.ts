import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportParameterWhereUniqueInputObjectSchema } from './ReportParameterWhereUniqueInput.schema';
import { ReportParameterUpdateWithoutTemplateInputObjectSchema } from './ReportParameterUpdateWithoutTemplateInput.schema';
import { ReportParameterUncheckedUpdateWithoutTemplateInputObjectSchema } from './ReportParameterUncheckedUpdateWithoutTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportParameterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportParameterUpdateWithoutTemplateInputObjectSchema), z.lazy(() => ReportParameterUncheckedUpdateWithoutTemplateInputObjectSchema)])
}).strict();
export const ReportParameterUpdateWithWhereUniqueWithoutTemplateInputObjectSchema: z.ZodType<Prisma.ReportParameterUpdateWithWhereUniqueWithoutTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterUpdateWithWhereUniqueWithoutTemplateInput>;
export const ReportParameterUpdateWithWhereUniqueWithoutTemplateInputObjectZodSchema = makeSchema();
