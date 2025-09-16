import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceCreateWithoutReportTemplateInputObjectSchema } from './ServiceCreateWithoutReportTemplateInput.schema';
import { ServiceUncheckedCreateWithoutReportTemplateInputObjectSchema } from './ServiceUncheckedCreateWithoutReportTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ServiceCreateWithoutReportTemplateInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutReportTemplateInputObjectSchema)])
}).strict();
export const ServiceCreateOrConnectWithoutReportTemplateInputObjectSchema: z.ZodType<Prisma.ServiceCreateOrConnectWithoutReportTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateOrConnectWithoutReportTemplateInput>;
export const ServiceCreateOrConnectWithoutReportTemplateInputObjectZodSchema = makeSchema();
