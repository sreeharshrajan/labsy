import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema';
import { TenantUserCreateWithoutReportUpdatesInputObjectSchema } from './TenantUserCreateWithoutReportUpdatesInput.schema';
import { TenantUserUncheckedCreateWithoutReportUpdatesInputObjectSchema } from './TenantUserUncheckedCreateWithoutReportUpdatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantUserCreateWithoutReportUpdatesInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutReportUpdatesInputObjectSchema)])
}).strict();
export const TenantUserCreateOrConnectWithoutReportUpdatesInputObjectSchema: z.ZodType<Prisma.TenantUserCreateOrConnectWithoutReportUpdatesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateOrConnectWithoutReportUpdatesInput>;
export const TenantUserCreateOrConnectWithoutReportUpdatesInputObjectZodSchema = makeSchema();
