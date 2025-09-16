import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleUncheckedCreateNestedManyWithoutTenantUserInputObjectSchema } from './TenantUserRoleUncheckedCreateNestedManyWithoutTenantUserInput.schema';
import { ReportChangeLogUncheckedCreateNestedManyWithoutChangedByInputObjectSchema } from './ReportChangeLogUncheckedCreateNestedManyWithoutChangedByInput.schema';
import { ReportUncheckedCreateNestedManyWithoutCollectedByUserInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutCollectedByUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userId: z.string(),
  tenantId: z.string(),
  tenantRoles: z.lazy(() => TenantUserRoleUncheckedCreateNestedManyWithoutTenantUserInputObjectSchema).optional(),
  reportUpdates: z.lazy(() => ReportChangeLogUncheckedCreateNestedManyWithoutChangedByInputObjectSchema).optional(),
  collectedBy: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCollectedByUserInputObjectSchema).optional()
}).strict();
export const TenantUserUncheckedCreateWithoutReportInputObjectSchema: z.ZodType<Prisma.TenantUserUncheckedCreateWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUncheckedCreateWithoutReportInput>;
export const TenantUserUncheckedCreateWithoutReportInputObjectZodSchema = makeSchema();
