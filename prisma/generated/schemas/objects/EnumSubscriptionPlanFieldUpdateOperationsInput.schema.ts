import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionPlanSchema } from '../enums/SubscriptionPlan.schema'

const makeSchema = () => z.object({
  set: SubscriptionPlanSchema.optional()
}).strict();
export const EnumSubscriptionPlanFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput>;
export const EnumSubscriptionPlanFieldUpdateOperationsInputObjectZodSchema = makeSchema();
