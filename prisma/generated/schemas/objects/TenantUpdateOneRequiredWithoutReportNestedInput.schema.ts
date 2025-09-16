import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutReportInputObjectSchema } from './TenantCreateWithoutReportInput.schema';
import { TenantUncheckedCreateWithoutReportInputObjectSchema } from './TenantUncheckedCreateWithoutReportInput.schema';
import { TenantCreateOrConnectWithoutReportInputObjectSchema } from './TenantCreateOrConnectWithoutReportInput.schema';
import { TenantUpsertWithoutReportInputObjectSchema } from './TenantUpsertWithoutReportInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutReportInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutReportInput.schema';
import { TenantUpdateWithoutReportInputObjectSchema } from './TenantUpdateWithoutReportInput.schema';
import { TenantUncheckedUpdateWithoutReportInputObjectSchema } from './TenantUncheckedUpdateWithoutReportInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutReportInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutReportInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutReportInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutReportInputObjectSchema), z.lazy(() => TenantUpdateWithoutReportInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutReportInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutReportNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutReportNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutReportNestedInput>;
export const TenantUpdateOneRequiredWithoutReportNestedInputObjectZodSchema = makeSchema();
