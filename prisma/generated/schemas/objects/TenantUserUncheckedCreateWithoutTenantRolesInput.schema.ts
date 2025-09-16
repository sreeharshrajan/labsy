import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutCreatedByUserInput.schema';
import { ReportChangeLogUncheckedCreateNestedManyWithoutChangedByInputObjectSchema } from './ReportChangeLogUncheckedCreateNestedManyWithoutChangedByInput.schema';
import { ReportUncheckedCreateNestedManyWithoutCollectedByUserInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutCollectedByUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userId: z.string(),
  tenantId: z.string(),
  Report: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  reportUpdates: z.lazy(() => ReportChangeLogUncheckedCreateNestedManyWithoutChangedByInputObjectSchema).optional(),
  collectedBy: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCollectedByUserInputObjectSchema).optional()
}).strict();
export const TenantUserUncheckedCreateWithoutTenantRolesInputObjectSchema: z.ZodType<Prisma.TenantUserUncheckedCreateWithoutTenantRolesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUncheckedCreateWithoutTenantRolesInput>;
export const TenantUserUncheckedCreateWithoutTenantRolesInputObjectZodSchema = makeSchema();
