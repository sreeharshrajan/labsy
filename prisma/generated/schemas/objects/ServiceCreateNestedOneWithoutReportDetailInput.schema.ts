import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateWithoutReportDetailInputObjectSchema } from './ServiceCreateWithoutReportDetailInput.schema';
import { ServiceUncheckedCreateWithoutReportDetailInputObjectSchema } from './ServiceUncheckedCreateWithoutReportDetailInput.schema';
import { ServiceCreateOrConnectWithoutReportDetailInputObjectSchema } from './ServiceCreateOrConnectWithoutReportDetailInput.schema';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServiceCreateWithoutReportDetailInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutReportDetailInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutReportDetailInputObjectSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputObjectSchema).optional()
}).strict();
export const ServiceCreateNestedOneWithoutReportDetailInputObjectSchema: z.ZodType<Prisma.ServiceCreateNestedOneWithoutReportDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateNestedOneWithoutReportDetailInput>;
export const ServiceCreateNestedOneWithoutReportDetailInputObjectZodSchema = makeSchema();
