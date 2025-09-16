import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateScalarWhereInputObjectSchema } from './ReportTemplateScalarWhereInput.schema';
import { ReportTemplateUpdateManyMutationInputObjectSchema } from './ReportTemplateUpdateManyMutationInput.schema';
import { ReportTemplateUncheckedUpdateManyWithoutServiceInputObjectSchema } from './ReportTemplateUncheckedUpdateManyWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportTemplateScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportTemplateUpdateManyMutationInputObjectSchema), z.lazy(() => ReportTemplateUncheckedUpdateManyWithoutServiceInputObjectSchema)])
}).strict();
export const ReportTemplateUpdateManyWithWhereWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportTemplateUpdateManyWithWhereWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUpdateManyWithWhereWithoutServiceInput>;
export const ReportTemplateUpdateManyWithWhereWithoutServiceInputObjectZodSchema = makeSchema();
