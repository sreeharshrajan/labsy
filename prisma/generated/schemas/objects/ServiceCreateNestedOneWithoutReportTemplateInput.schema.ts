import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateWithoutReportTemplateInputObjectSchema } from './ServiceCreateWithoutReportTemplateInput.schema';
import { ServiceUncheckedCreateWithoutReportTemplateInputObjectSchema } from './ServiceUncheckedCreateWithoutReportTemplateInput.schema';
import { ServiceCreateOrConnectWithoutReportTemplateInputObjectSchema } from './ServiceCreateOrConnectWithoutReportTemplateInput.schema';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServiceCreateWithoutReportTemplateInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutReportTemplateInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutReportTemplateInputObjectSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputObjectSchema).optional()
}).strict();
export const ServiceCreateNestedOneWithoutReportTemplateInputObjectSchema: z.ZodType<Prisma.ServiceCreateNestedOneWithoutReportTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateNestedOneWithoutReportTemplateInput>;
export const ServiceCreateNestedOneWithoutReportTemplateInputObjectZodSchema = makeSchema();
