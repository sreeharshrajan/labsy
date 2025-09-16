import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleUncheckedCreateNestedManyWithoutTenantUserInputObjectSchema } from './TenantUserRoleUncheckedCreateNestedManyWithoutTenantUserInput.schema';
import { ReportUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutCreatedByUserInput.schema';
import { ReportUncheckedCreateNestedManyWithoutCollectedByUserInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutCollectedByUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userId: z.string(),
  tenantId: z.string(),
  tenantRoles: z.lazy(() => TenantUserRoleUncheckedCreateNestedManyWithoutTenantUserInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  collectedBy: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCollectedByUserInputObjectSchema).optional()
}).strict();
export const TenantUserUncheckedCreateWithoutReportUpdatesInputObjectSchema: z.ZodType<Prisma.TenantUserUncheckedCreateWithoutReportUpdatesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUncheckedCreateWithoutReportUpdatesInput>;
export const TenantUserUncheckedCreateWithoutReportUpdatesInputObjectZodSchema = makeSchema();
