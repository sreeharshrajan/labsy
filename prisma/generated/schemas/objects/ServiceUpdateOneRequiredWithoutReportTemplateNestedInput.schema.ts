import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateWithoutReportTemplateInputObjectSchema } from './ServiceCreateWithoutReportTemplateInput.schema';
import { ServiceUncheckedCreateWithoutReportTemplateInputObjectSchema } from './ServiceUncheckedCreateWithoutReportTemplateInput.schema';
import { ServiceCreateOrConnectWithoutReportTemplateInputObjectSchema } from './ServiceCreateOrConnectWithoutReportTemplateInput.schema';
import { ServiceUpsertWithoutReportTemplateInputObjectSchema } from './ServiceUpsertWithoutReportTemplateInput.schema';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceUpdateToOneWithWhereWithoutReportTemplateInputObjectSchema } from './ServiceUpdateToOneWithWhereWithoutReportTemplateInput.schema';
import { ServiceUpdateWithoutReportTemplateInputObjectSchema } from './ServiceUpdateWithoutReportTemplateInput.schema';
import { ServiceUncheckedUpdateWithoutReportTemplateInputObjectSchema } from './ServiceUncheckedUpdateWithoutReportTemplateInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServiceCreateWithoutReportTemplateInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutReportTemplateInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutReportTemplateInputObjectSchema).optional(),
  upsert: z.lazy(() => ServiceUpsertWithoutReportTemplateInputObjectSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ServiceUpdateToOneWithWhereWithoutReportTemplateInputObjectSchema), z.lazy(() => ServiceUpdateWithoutReportTemplateInputObjectSchema), z.lazy(() => ServiceUncheckedUpdateWithoutReportTemplateInputObjectSchema)]).optional()
}).strict();
export const ServiceUpdateOneRequiredWithoutReportTemplateNestedInputObjectSchema: z.ZodType<Prisma.ServiceUpdateOneRequiredWithoutReportTemplateNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateOneRequiredWithoutReportTemplateNestedInput>;
export const ServiceUpdateOneRequiredWithoutReportTemplateNestedInputObjectZodSchema = makeSchema();
