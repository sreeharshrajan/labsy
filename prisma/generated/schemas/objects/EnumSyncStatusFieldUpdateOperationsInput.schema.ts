import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncStatusSchema } from '../enums/SyncStatus.schema'

const makeSchema = () => z.object({
  set: SyncStatusSchema.optional()
}).strict();
export const EnumSyncStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumSyncStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumSyncStatusFieldUpdateOperationsInput>;
export const EnumSyncStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
