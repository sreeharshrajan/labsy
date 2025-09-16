import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema';
import { ServiceUpdateWithoutReportDetailInputObjectSchema } from './ServiceUpdateWithoutReportDetailInput.schema';
import { ServiceUncheckedUpdateWithoutReportDetailInputObjectSchema } from './ServiceUncheckedUpdateWithoutReportDetailInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ServiceUpdateWithoutReportDetailInputObjectSchema), z.lazy(() => ServiceUncheckedUpdateWithoutReportDetailInputObjectSchema)])
}).strict();
export const ServiceUpdateToOneWithWhereWithoutReportDetailInputObjectSchema: z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutReportDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutReportDetailInput>;
export const ServiceUpdateToOneWithWhereWithoutReportDetailInputObjectZodSchema = makeSchema();
