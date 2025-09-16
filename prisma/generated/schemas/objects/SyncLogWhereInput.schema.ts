import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { EnumSyncStatusFilterObjectSchema } from './EnumSyncStatusFilter.schema';
import { SyncStatusSchema } from '../enums/SyncStatus.schema';
import { EnumSyncOperationFilterObjectSchema } from './EnumSyncOperationFilter.schema';
import { SyncOperationSchema } from '../enums/SyncOperation.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const synclogwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SyncLogWhereInputObjectSchema), z.lazy(() => SyncLogWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SyncLogWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SyncLogWhereInputObjectSchema), z.lazy(() => SyncLogWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  entity: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  entityId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  details: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  status: z.union([z.lazy(() => EnumSyncStatusFilterObjectSchema), SyncStatusSchema]).optional(),
  operation: z.union([z.lazy(() => EnumSyncOperationFilterObjectSchema), SyncOperationSchema]).optional(),
  syncedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  startedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional()
}).strict();
export const SyncLogWhereInputObjectSchema: z.ZodType<Prisma.SyncLogWhereInput> = synclogwhereinputSchema as unknown as z.ZodType<Prisma.SyncLogWhereInput>;
export const SyncLogWhereInputObjectZodSchema = synclogwhereinputSchema;
