import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutReportInputObjectSchema } from './CustomerCreateWithoutReportInput.schema';
import { CustomerUncheckedCreateWithoutReportInputObjectSchema } from './CustomerUncheckedCreateWithoutReportInput.schema';
import { CustomerCreateOrConnectWithoutReportInputObjectSchema } from './CustomerCreateOrConnectWithoutReportInput.schema';
import { CustomerUpsertWithoutReportInputObjectSchema } from './CustomerUpsertWithoutReportInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateToOneWithWhereWithoutReportInputObjectSchema } from './CustomerUpdateToOneWithWhereWithoutReportInput.schema';
import { CustomerUpdateWithoutReportInputObjectSchema } from './CustomerUpdateWithoutReportInput.schema';
import { CustomerUncheckedUpdateWithoutReportInputObjectSchema } from './CustomerUncheckedUpdateWithoutReportInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutReportInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutReportInputObjectSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutReportInputObjectSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CustomerUpdateToOneWithWhereWithoutReportInputObjectSchema), z.lazy(() => CustomerUpdateWithoutReportInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutReportInputObjectSchema)]).optional()
}).strict();
export const CustomerUpdateOneRequiredWithoutReportNestedInputObjectSchema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutReportNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutReportNestedInput>;
export const CustomerUpdateOneRequiredWithoutReportNestedInputObjectZodSchema = makeSchema();
