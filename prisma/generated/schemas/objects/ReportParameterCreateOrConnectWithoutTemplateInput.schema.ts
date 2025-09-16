import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportParameterWhereUniqueInputObjectSchema } from './ReportParameterWhereUniqueInput.schema';
import { ReportParameterCreateWithoutTemplateInputObjectSchema } from './ReportParameterCreateWithoutTemplateInput.schema';
import { ReportParameterUncheckedCreateWithoutTemplateInputObjectSchema } from './ReportParameterUncheckedCreateWithoutTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportParameterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportParameterCreateWithoutTemplateInputObjectSchema), z.lazy(() => ReportParameterUncheckedCreateWithoutTemplateInputObjectSchema)])
}).strict();
export const ReportParameterCreateOrConnectWithoutTemplateInputObjectSchema: z.ZodType<Prisma.ReportParameterCreateOrConnectWithoutTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterCreateOrConnectWithoutTemplateInput>;
export const ReportParameterCreateOrConnectWithoutTemplateInputObjectZodSchema = makeSchema();
