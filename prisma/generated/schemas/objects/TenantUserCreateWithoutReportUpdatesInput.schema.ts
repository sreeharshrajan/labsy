import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleCreateNestedManyWithoutTenantUserInputObjectSchema } from './TenantUserRoleCreateNestedManyWithoutTenantUserInput.schema';
import { UserCreateNestedOneWithoutTenantsInputObjectSchema } from './UserCreateNestedOneWithoutTenantsInput.schema';
import { TenantCreateNestedOneWithoutUsersInputObjectSchema } from './TenantCreateNestedOneWithoutUsersInput.schema';
import { ReportCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './ReportCreateNestedManyWithoutCreatedByUserInput.schema';
import { ReportCreateNestedManyWithoutCollectedByUserInputObjectSchema } from './ReportCreateNestedManyWithoutCollectedByUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantRoles: z.lazy(() => TenantUserRoleCreateNestedManyWithoutTenantUserInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutTenantsInputObjectSchema),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutUsersInputObjectSchema),
  Report: z.lazy(() => ReportCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  collectedBy: z.lazy(() => ReportCreateNestedManyWithoutCollectedByUserInputObjectSchema).optional()
}).strict();
export const TenantUserCreateWithoutReportUpdatesInputObjectSchema: z.ZodType<Prisma.TenantUserCreateWithoutReportUpdatesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateWithoutReportUpdatesInput>;
export const TenantUserCreateWithoutReportUpdatesInputObjectZodSchema = makeSchema();
