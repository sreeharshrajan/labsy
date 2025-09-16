import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceCreateWithoutReportDetailInputObjectSchema } from './ServiceCreateWithoutReportDetailInput.schema';
import { ServiceUncheckedCreateWithoutReportDetailInputObjectSchema } from './ServiceUncheckedCreateWithoutReportDetailInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ServiceCreateWithoutReportDetailInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutReportDetailInputObjectSchema)])
}).strict();
export const ServiceCreateOrConnectWithoutReportDetailInputObjectSchema: z.ZodType<Prisma.ServiceCreateOrConnectWithoutReportDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateOrConnectWithoutReportDetailInput>;
export const ServiceCreateOrConnectWithoutReportDetailInputObjectZodSchema = makeSchema();
