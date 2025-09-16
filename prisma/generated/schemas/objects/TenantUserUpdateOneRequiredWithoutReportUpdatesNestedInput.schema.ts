import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateWithoutReportUpdatesInputObjectSchema } from './TenantUserCreateWithoutReportUpdatesInput.schema';
import { TenantUserUncheckedCreateWithoutReportUpdatesInputObjectSchema } from './TenantUserUncheckedCreateWithoutReportUpdatesInput.schema';
import { TenantUserCreateOrConnectWithoutReportUpdatesInputObjectSchema } from './TenantUserCreateOrConnectWithoutReportUpdatesInput.schema';
import { TenantUserUpsertWithoutReportUpdatesInputObjectSchema } from './TenantUserUpsertWithoutReportUpdatesInput.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema';
import { TenantUserUpdateToOneWithWhereWithoutReportUpdatesInputObjectSchema } from './TenantUserUpdateToOneWithWhereWithoutReportUpdatesInput.schema';
import { TenantUserUpdateWithoutReportUpdatesInputObjectSchema } from './TenantUserUpdateWithoutReportUpdatesInput.schema';
import { TenantUserUncheckedUpdateWithoutReportUpdatesInputObjectSchema } from './TenantUserUncheckedUpdateWithoutReportUpdatesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantUserCreateWithoutReportUpdatesInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutReportUpdatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantUserCreateOrConnectWithoutReportUpdatesInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUserUpsertWithoutReportUpdatesInputObjectSchema).optional(),
  connect: z.lazy(() => TenantUserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUserUpdateToOneWithWhereWithoutReportUpdatesInputObjectSchema), z.lazy(() => TenantUserUpdateWithoutReportUpdatesInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateWithoutReportUpdatesInputObjectSchema)]).optional()
}).strict();
export const TenantUserUpdateOneRequiredWithoutReportUpdatesNestedInputObjectSchema: z.ZodType<Prisma.TenantUserUpdateOneRequiredWithoutReportUpdatesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpdateOneRequiredWithoutReportUpdatesNestedInput>;
export const TenantUserUpdateOneRequiredWithoutReportUpdatesNestedInputObjectZodSchema = makeSchema();
