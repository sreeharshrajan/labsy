import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleUncheckedCreateNestedManyWithoutTenantUserInputObjectSchema } from './TenantUserRoleUncheckedCreateNestedManyWithoutTenantUserInput.schema';
import { ReportUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutCreatedByUserInput.schema';
import { ReportChangeLogUncheckedCreateNestedManyWithoutChangedByInputObjectSchema } from './ReportChangeLogUncheckedCreateNestedManyWithoutChangedByInput.schema';
import { ReportUncheckedCreateNestedManyWithoutCollectedByUserInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutCollectedByUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userId: z.string(),
  tenantId: z.string(),
  tenantRoles: z.lazy(() => TenantUserRoleUncheckedCreateNestedManyWithoutTenantUserInputObjectSchema),
  Report: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema),
  reportUpdates: z.lazy(() => ReportChangeLogUncheckedCreateNestedManyWithoutChangedByInputObjectSchema),
  collectedBy: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCollectedByUserInputObjectSchema)
}).strict();
export const TenantUserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TenantUserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUncheckedCreateInput>;
export const TenantUserUncheckedCreateInputObjectZodSchema = makeSchema();
