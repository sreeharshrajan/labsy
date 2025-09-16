import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserWhereInputObjectSchema } from './TenantUserWhereInput.schema';
import { TenantUserUpdateWithoutReportUpdatesInputObjectSchema } from './TenantUserUpdateWithoutReportUpdatesInput.schema';
import { TenantUserUncheckedUpdateWithoutReportUpdatesInputObjectSchema } from './TenantUserUncheckedUpdateWithoutReportUpdatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUserUpdateWithoutReportUpdatesInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateWithoutReportUpdatesInputObjectSchema)])
}).strict();
export const TenantUserUpdateToOneWithWhereWithoutReportUpdatesInputObjectSchema: z.ZodType<Prisma.TenantUserUpdateToOneWithWhereWithoutReportUpdatesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpdateToOneWithWhereWithoutReportUpdatesInput>;
export const TenantUserUpdateToOneWithWhereWithoutReportUpdatesInputObjectZodSchema = makeSchema();
