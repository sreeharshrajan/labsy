import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutTenantInputObjectSchema } from './ReportCreateWithoutTenantInput.schema';
import { ReportUncheckedCreateWithoutTenantInputObjectSchema } from './ReportUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutTenantInput>;
export const ReportCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
