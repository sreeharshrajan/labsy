import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncOperationSchema } from '../enums/SyncOperation.schema'

const makeSchema = () => z.object({
  set: SyncOperationSchema.optional()
}).strict();
export const EnumSyncOperationFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumSyncOperationFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumSyncOperationFieldUpdateOperationsInput>;
export const EnumSyncOperationFieldUpdateOperationsInputObjectZodSchema = makeSchema();
