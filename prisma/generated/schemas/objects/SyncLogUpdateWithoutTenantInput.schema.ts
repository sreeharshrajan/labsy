import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { SyncStatusSchema } from '../enums/SyncStatus.schema';
import { EnumSyncStatusFieldUpdateOperationsInputObjectSchema } from './EnumSyncStatusFieldUpdateOperationsInput.schema';
import { SyncOperationSchema } from '../enums/SyncOperation.schema';
import { EnumSyncOperationFieldUpdateOperationsInputObjectSchema } from './EnumSyncOperationFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  entity: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  entityId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  details: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  status: z.union([SyncStatusSchema, z.lazy(() => EnumSyncStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  operation: z.union([SyncOperationSchema, z.lazy(() => EnumSyncOperationFieldUpdateOperationsInputObjectSchema)]).optional(),
  syncedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  startedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SyncLogUpdateWithoutTenantInputObjectSchema: z.ZodType<Prisma.SyncLogUpdateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogUpdateWithoutTenantInput>;
export const SyncLogUpdateWithoutTenantInputObjectZodSchema = makeSchema();
