import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionStatusSchema } from '../enums/SubscriptionStatus.schema'

const makeSchema = () => z.object({
  set: SubscriptionStatusSchema.optional()
}).strict();
export const EnumSubscriptionStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput>;
export const EnumSubscriptionStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
