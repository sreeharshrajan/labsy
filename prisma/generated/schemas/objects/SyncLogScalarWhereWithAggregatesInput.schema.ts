import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { EnumSyncStatusWithAggregatesFilterObjectSchema } from './EnumSyncStatusWithAggregatesFilter.schema';
import { SyncStatusSchema } from '../enums/SyncStatus.schema';
import { EnumSyncOperationWithAggregatesFilterObjectSchema } from './EnumSyncOperationWithAggregatesFilter.schema';
import { SyncOperationSchema } from '../enums/SyncOperation.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const synclogscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SyncLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SyncLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SyncLogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SyncLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SyncLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  entity: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  entityId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  details: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  status: z.union([z.lazy(() => EnumSyncStatusWithAggregatesFilterObjectSchema), SyncStatusSchema]).optional(),
  operation: z.union([z.lazy(() => EnumSyncOperationWithAggregatesFilterObjectSchema), SyncOperationSchema]).optional(),
  syncedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  startedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const SyncLogScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SyncLogScalarWhereWithAggregatesInput> = synclogscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SyncLogScalarWhereWithAggregatesInput>;
export const SyncLogScalarWhereWithAggregatesInputObjectZodSchema = synclogscalarwherewithaggregatesinputSchema;
