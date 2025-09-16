import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateWithoutReportDetailInputObjectSchema } from './ServiceCreateWithoutReportDetailInput.schema';
import { ServiceUncheckedCreateWithoutReportDetailInputObjectSchema } from './ServiceUncheckedCreateWithoutReportDetailInput.schema';
import { ServiceCreateOrConnectWithoutReportDetailInputObjectSchema } from './ServiceCreateOrConnectWithoutReportDetailInput.schema';
import { ServiceUpsertWithoutReportDetailInputObjectSchema } from './ServiceUpsertWithoutReportDetailInput.schema';
import { ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceUpdateToOneWithWhereWithoutReportDetailInputObjectSchema } from './ServiceUpdateToOneWithWhereWithoutReportDetailInput.schema';
import { ServiceUpdateWithoutReportDetailInputObjectSchema } from './ServiceUpdateWithoutReportDetailInput.schema';
import { ServiceUncheckedUpdateWithoutReportDetailInputObjectSchema } from './ServiceUncheckedUpdateWithoutReportDetailInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServiceCreateWithoutReportDetailInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutReportDetailInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutReportDetailInputObjectSchema).optional(),
  upsert: z.lazy(() => ServiceUpsertWithoutReportDetailInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ServiceWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ServiceWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ServiceUpdateToOneWithWhereWithoutReportDetailInputObjectSchema), z.lazy(() => ServiceUpdateWithoutReportDetailInputObjectSchema), z.lazy(() => ServiceUncheckedUpdateWithoutReportDetailInputObjectSchema)]).optional()
}).strict();
export const ServiceUpdateOneWithoutReportDetailNestedInputObjectSchema: z.ZodType<Prisma.ServiceUpdateOneWithoutReportDetailNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateOneWithoutReportDetailNestedInput>;
export const ServiceUpdateOneWithoutReportDetailNestedInputObjectZodSchema = makeSchema();
