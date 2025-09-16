import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleCreateNestedManyWithoutTenantUserInputObjectSchema } from './TenantUserRoleCreateNestedManyWithoutTenantUserInput.schema';
import { UserCreateNestedOneWithoutTenantsInputObjectSchema } from './UserCreateNestedOneWithoutTenantsInput.schema';
import { TenantCreateNestedOneWithoutUsersInputObjectSchema } from './TenantCreateNestedOneWithoutUsersInput.schema';
import { ReportCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './ReportCreateNestedManyWithoutCreatedByUserInput.schema';
import { ReportChangeLogCreateNestedManyWithoutChangedByInputObjectSchema } from './ReportChangeLogCreateNestedManyWithoutChangedByInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantRoles: z.lazy(() => TenantUserRoleCreateNestedManyWithoutTenantUserInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutTenantsInputObjectSchema),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutUsersInputObjectSchema),
  Report: z.lazy(() => ReportCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  reportUpdates: z.lazy(() => ReportChangeLogCreateNestedManyWithoutChangedByInputObjectSchema).optional()
}).strict();
export const TenantUserCreateWithoutCollectedByInputObjectSchema: z.ZodType<Prisma.TenantUserCreateWithoutCollectedByInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateWithoutCollectedByInput>;
export const TenantUserCreateWithoutCollectedByInputObjectZodSchema = makeSchema();
