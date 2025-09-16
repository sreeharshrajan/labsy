import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleCreateNestedManyWithoutTenantUserInputObjectSchema } from './TenantUserRoleCreateNestedManyWithoutTenantUserInput.schema';
import { UserCreateNestedOneWithoutTenantsInputObjectSchema } from './UserCreateNestedOneWithoutTenantsInput.schema';
import { ReportCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './ReportCreateNestedManyWithoutCreatedByUserInput.schema';
import { ReportChangeLogCreateNestedManyWithoutChangedByInputObjectSchema } from './ReportChangeLogCreateNestedManyWithoutChangedByInput.schema';
import { ReportCreateNestedManyWithoutCollectedByUserInputObjectSchema } from './ReportCreateNestedManyWithoutCollectedByUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantRoles: z.lazy(() => TenantUserRoleCreateNestedManyWithoutTenantUserInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutTenantsInputObjectSchema),
  Report: z.lazy(() => ReportCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  reportUpdates: z.lazy(() => ReportChangeLogCreateNestedManyWithoutChangedByInputObjectSchema).optional(),
  collectedBy: z.lazy(() => ReportCreateNestedManyWithoutCollectedByUserInputObjectSchema).optional()
}).strict();
export const TenantUserCreateWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantUserCreateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateWithoutTenantInput>;
export const TenantUserCreateWithoutTenantInputObjectZodSchema = makeSchema();
