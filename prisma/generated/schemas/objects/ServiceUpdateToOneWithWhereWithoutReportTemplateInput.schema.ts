import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema';
import { ServiceUpdateWithoutReportTemplateInputObjectSchema } from './ServiceUpdateWithoutReportTemplateInput.schema';
import { ServiceUncheckedUpdateWithoutReportTemplateInputObjectSchema } from './ServiceUncheckedUpdateWithoutReportTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ServiceUpdateWithoutReportTemplateInputObjectSchema), z.lazy(() => ServiceUncheckedUpdateWithoutReportTemplateInputObjectSchema)])
}).strict();
export const ServiceUpdateToOneWithWhereWithoutReportTemplateInputObjectSchema: z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutReportTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutReportTemplateInput>;
export const ServiceUpdateToOneWithWhereWithoutReportTemplateInputObjectZodSchema = makeSchema();
