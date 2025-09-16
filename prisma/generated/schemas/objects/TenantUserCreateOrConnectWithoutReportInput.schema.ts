import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema';
import { TenantUserCreateWithoutReportInputObjectSchema } from './TenantUserCreateWithoutReportInput.schema';
import { TenantUserUncheckedCreateWithoutReportInputObjectSchema } from './TenantUserUncheckedCreateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantUserCreateWithoutReportInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const TenantUserCreateOrConnectWithoutReportInputObjectSchema: z.ZodType<Prisma.TenantUserCreateOrConnectWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateOrConnectWithoutReportInput>;
export const TenantUserCreateOrConnectWithoutReportInputObjectZodSchema = makeSchema();
