import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserUpdateWithoutReportUpdatesInputObjectSchema } from './TenantUserUpdateWithoutReportUpdatesInput.schema';
import { TenantUserUncheckedUpdateWithoutReportUpdatesInputObjectSchema } from './TenantUserUncheckedUpdateWithoutReportUpdatesInput.schema';
import { TenantUserCreateWithoutReportUpdatesInputObjectSchema } from './TenantUserCreateWithoutReportUpdatesInput.schema';
import { TenantUserUncheckedCreateWithoutReportUpdatesInputObjectSchema } from './TenantUserUncheckedCreateWithoutReportUpdatesInput.schema';
import { TenantUserWhereInputObjectSchema } from './TenantUserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUserUpdateWithoutReportUpdatesInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateWithoutReportUpdatesInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantUserCreateWithoutReportUpdatesInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutReportUpdatesInputObjectSchema)]),
  where: z.lazy(() => TenantUserWhereInputObjectSchema).optional()
}).strict();
export const TenantUserUpsertWithoutReportUpdatesInputObjectSchema: z.ZodType<Prisma.TenantUserUpsertWithoutReportUpdatesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpsertWithoutReportUpdatesInput>;
export const TenantUserUpsertWithoutReportUpdatesInputObjectZodSchema = makeSchema();
