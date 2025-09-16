import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleCreateNestedManyWithoutTenantUserInputObjectSchema } from './TenantUserRoleCreateNestedManyWithoutTenantUserInput.schema';
import { UserCreateNestedOneWithoutTenantsInputObjectSchema } from './UserCreateNestedOneWithoutTenantsInput.schema';
import { TenantCreateNestedOneWithoutUsersInputObjectSchema } from './TenantCreateNestedOneWithoutUsersInput.schema';
import { ReportCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './ReportCreateNestedManyWithoutCreatedByUserInput.schema';
import { ReportChangeLogCreateNestedManyWithoutChangedByInputObjectSchema } from './ReportChangeLogCreateNestedManyWithoutChangedByInput.schema';
import { ReportCreateNestedManyWithoutCollectedByUserInputObjectSchema } from './ReportCreateNestedManyWithoutCollectedByUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantRoles: z.lazy(() => TenantUserRoleCreateNestedManyWithoutTenantUserInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutTenantsInputObjectSchema),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutUsersInputObjectSchema),
  Report: z.lazy(() => ReportCreateNestedManyWithoutCreatedByUserInputObjectSchema),
  reportUpdates: z.lazy(() => ReportChangeLogCreateNestedManyWithoutChangedByInputObjectSchema),
  collectedBy: z.lazy(() => ReportCreateNestedManyWithoutCollectedByUserInputObjectSchema)
}).strict();
export const TenantUserCreateInputObjectSchema: z.ZodType<Prisma.TenantUserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateInput>;
export const TenantUserCreateInputObjectZodSchema = makeSchema();
