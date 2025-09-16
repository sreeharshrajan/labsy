import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateWithoutReportUpdatesInputObjectSchema } from './TenantUserCreateWithoutReportUpdatesInput.schema';
import { TenantUserUncheckedCreateWithoutReportUpdatesInputObjectSchema } from './TenantUserUncheckedCreateWithoutReportUpdatesInput.schema';
import { TenantUserCreateOrConnectWithoutReportUpdatesInputObjectSchema } from './TenantUserCreateOrConnectWithoutReportUpdatesInput.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantUserCreateWithoutReportUpdatesInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutReportUpdatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantUserCreateOrConnectWithoutReportUpdatesInputObjectSchema).optional(),
  connect: z.lazy(() => TenantUserWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantUserCreateNestedOneWithoutReportUpdatesInputObjectSchema: z.ZodType<Prisma.TenantUserCreateNestedOneWithoutReportUpdatesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateNestedOneWithoutReportUpdatesInput>;
export const TenantUserCreateNestedOneWithoutReportUpdatesInputObjectZodSchema = makeSchema();
