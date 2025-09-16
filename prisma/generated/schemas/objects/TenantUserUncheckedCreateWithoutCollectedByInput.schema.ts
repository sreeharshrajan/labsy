import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleUncheckedCreateNestedManyWithoutTenantUserInputObjectSchema } from './TenantUserRoleUncheckedCreateNestedManyWithoutTenantUserInput.schema';
import { ReportUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutCreatedByUserInput.schema';
import { ReportChangeLogUncheckedCreateNestedManyWithoutChangedByInputObjectSchema } from './ReportChangeLogUncheckedCreateNestedManyWithoutChangedByInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userId: z.string(),
  tenantId: z.string(),
  tenantRoles: z.lazy(() => TenantUserRoleUncheckedCreateNestedManyWithoutTenantUserInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  reportUpdates: z.lazy(() => ReportChangeLogUncheckedCreateNestedManyWithoutChangedByInputObjectSchema).optional()
}).strict();
export const TenantUserUncheckedCreateWithoutCollectedByInputObjectSchema: z.ZodType<Prisma.TenantUserUncheckedCreateWithoutCollectedByInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUncheckedCreateWithoutCollectedByInput>;
export const TenantUserUncheckedCreateWithoutCollectedByInputObjectZodSchema = makeSchema();
