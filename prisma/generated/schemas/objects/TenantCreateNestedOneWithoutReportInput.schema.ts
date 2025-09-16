import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutReportInputObjectSchema } from './TenantCreateWithoutReportInput.schema';
import { TenantUncheckedCreateWithoutReportInputObjectSchema } from './TenantUncheckedCreateWithoutReportInput.schema';
import { TenantCreateOrConnectWithoutReportInputObjectSchema } from './TenantCreateOrConnectWithoutReportInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutReportInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutReportInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutReportInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutReportInput>;
export const TenantCreateNestedOneWithoutReportInputObjectZodSchema = makeSchema();
