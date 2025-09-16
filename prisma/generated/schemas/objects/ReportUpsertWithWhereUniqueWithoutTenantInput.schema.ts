import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutTenantInputObjectSchema } from './ReportUpdateWithoutTenantInput.schema';
import { ReportUncheckedUpdateWithoutTenantInputObjectSchema } from './ReportUncheckedUpdateWithoutTenantInput.schema';
import { ReportCreateWithoutTenantInputObjectSchema } from './ReportCreateWithoutTenantInput.schema';
import { ReportUncheckedCreateWithoutTenantInputObjectSchema } from './ReportUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutTenantInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutTenantInput>;
export const ReportUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
