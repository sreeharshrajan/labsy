import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceUpdateWithoutReportTemplateInputObjectSchema } from './ServiceUpdateWithoutReportTemplateInput.schema';
import { ServiceUncheckedUpdateWithoutReportTemplateInputObjectSchema } from './ServiceUncheckedUpdateWithoutReportTemplateInput.schema';
import { ServiceCreateWithoutReportTemplateInputObjectSchema } from './ServiceCreateWithoutReportTemplateInput.schema';
import { ServiceUncheckedCreateWithoutReportTemplateInputObjectSchema } from './ServiceUncheckedCreateWithoutReportTemplateInput.schema';
import { ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ServiceUpdateWithoutReportTemplateInputObjectSchema), z.lazy(() => ServiceUncheckedUpdateWithoutReportTemplateInputObjectSchema)]),
  create: z.union([z.lazy(() => ServiceCreateWithoutReportTemplateInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutReportTemplateInputObjectSchema)]),
  where: z.lazy(() => ServiceWhereInputObjectSchema).optional()
}).strict();
export const ServiceUpsertWithoutReportTemplateInputObjectSchema: z.ZodType<Prisma.ServiceUpsertWithoutReportTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpsertWithoutReportTemplateInput>;
export const ServiceUpsertWithoutReportTemplateInputObjectZodSchema = makeSchema();
