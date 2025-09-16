import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutReportInputObjectSchema } from './TenantUpdateWithoutReportInput.schema';
import { TenantUncheckedUpdateWithoutReportInputObjectSchema } from './TenantUncheckedUpdateWithoutReportInput.schema';
import { TenantCreateWithoutReportInputObjectSchema } from './TenantCreateWithoutReportInput.schema';
import { TenantUncheckedCreateWithoutReportInputObjectSchema } from './TenantUncheckedCreateWithoutReportInput.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutReportInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutReportInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutReportInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutReportInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutReportInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutReportInput>;
export const TenantUpsertWithoutReportInputObjectZodSchema = makeSchema();
