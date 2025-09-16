import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceUpdateWithoutReportDetailInputObjectSchema } from './ServiceUpdateWithoutReportDetailInput.schema';
import { ServiceUncheckedUpdateWithoutReportDetailInputObjectSchema } from './ServiceUncheckedUpdateWithoutReportDetailInput.schema';
import { ServiceCreateWithoutReportDetailInputObjectSchema } from './ServiceCreateWithoutReportDetailInput.schema';
import { ServiceUncheckedCreateWithoutReportDetailInputObjectSchema } from './ServiceUncheckedCreateWithoutReportDetailInput.schema';
import { ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ServiceUpdateWithoutReportDetailInputObjectSchema), z.lazy(() => ServiceUncheckedUpdateWithoutReportDetailInputObjectSchema)]),
  create: z.union([z.lazy(() => ServiceCreateWithoutReportDetailInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutReportDetailInputObjectSchema)]),
  where: z.lazy(() => ServiceWhereInputObjectSchema).optional()
}).strict();
export const ServiceUpsertWithoutReportDetailInputObjectSchema: z.ZodType<Prisma.ServiceUpsertWithoutReportDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpsertWithoutReportDetailInput>;
export const ServiceUpsertWithoutReportDetailInputObjectZodSchema = makeSchema();
