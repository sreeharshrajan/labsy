import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportParameterScalarWhereInputObjectSchema } from './ReportParameterScalarWhereInput.schema';
import { ReportParameterUpdateManyMutationInputObjectSchema } from './ReportParameterUpdateManyMutationInput.schema';
import { ReportParameterUncheckedUpdateManyWithoutTemplateInputObjectSchema } from './ReportParameterUncheckedUpdateManyWithoutTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportParameterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportParameterUpdateManyMutationInputObjectSchema), z.lazy(() => ReportParameterUncheckedUpdateManyWithoutTemplateInputObjectSchema)])
}).strict();
export const ReportParameterUpdateManyWithWhereWithoutTemplateInputObjectSchema: z.ZodType<Prisma.ReportParameterUpdateManyWithWhereWithoutTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterUpdateManyWithWhereWithoutTemplateInput>;
export const ReportParameterUpdateManyWithWhereWithoutTemplateInputObjectZodSchema = makeSchema();
