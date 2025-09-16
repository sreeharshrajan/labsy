import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleCreateNestedManyWithoutTenantUserInputObjectSchema } from './TenantUserRoleCreateNestedManyWithoutTenantUserInput.schema';
import { UserCreateNestedOneWithoutTenantsInputObjectSchema } from './UserCreateNestedOneWithoutTenantsInput.schema';
import { TenantCreateNestedOneWithoutUsersInputObjectSchema } from './TenantCreateNestedOneWithoutUsersInput.schema';
import { ReportChangeLogCreateNestedManyWithoutChangedByInputObjectSchema } from './ReportChangeLogCreateNestedManyWithoutChangedByInput.schema';
import { ReportCreateNestedManyWithoutCollectedByUserInputObjectSchema } from './ReportCreateNestedManyWithoutCollectedByUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantRoles: z.lazy(() => TenantUserRoleCreateNestedManyWithoutTenantUserInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutTenantsInputObjectSchema),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutUsersInputObjectSchema),
  reportUpdates: z.lazy(() => ReportChangeLogCreateNestedManyWithoutChangedByInputObjectSchema).optional(),
  collectedBy: z.lazy(() => ReportCreateNestedManyWithoutCollectedByUserInputObjectSchema).optional()
}).strict();
export const TenantUserCreateWithoutReportInputObjectSchema: z.ZodType<Prisma.TenantUserCreateWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateWithoutReportInput>;
export const TenantUserCreateWithoutReportInputObjectZodSchema = makeSchema();
