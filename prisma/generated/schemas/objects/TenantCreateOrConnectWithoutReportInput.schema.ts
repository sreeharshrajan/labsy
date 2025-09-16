import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutReportInputObjectSchema } from './TenantCreateWithoutReportInput.schema';
import { TenantUncheckedCreateWithoutReportInputObjectSchema } from './TenantUncheckedCreateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutReportInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutReportInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutReportInput>;
export const TenantCreateOrConnectWithoutReportInputObjectZodSchema = makeSchema();
