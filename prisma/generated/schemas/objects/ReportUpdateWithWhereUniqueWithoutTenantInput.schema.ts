import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutTenantInputObjectSchema } from './ReportUpdateWithoutTenantInput.schema';
import { ReportUncheckedUpdateWithoutTenantInputObjectSchema } from './ReportUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutTenantInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutTenantInput>;
export const ReportUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
