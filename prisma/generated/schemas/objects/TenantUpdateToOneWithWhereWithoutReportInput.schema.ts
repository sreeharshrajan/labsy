import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutReportInputObjectSchema } from './TenantUpdateWithoutReportInput.schema';
import { TenantUncheckedUpdateWithoutReportInputObjectSchema } from './TenantUncheckedUpdateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutReportInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutReportInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutReportInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutReportInput>;
export const TenantUpdateToOneWithWhereWithoutReportInputObjectZodSchema = makeSchema();
