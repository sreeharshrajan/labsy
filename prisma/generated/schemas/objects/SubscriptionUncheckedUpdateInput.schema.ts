import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SubscriptionPlanSchema } from '../enums/SubscriptionPlan.schema';
import { EnumSubscriptionPlanFieldUpdateOperationsInputObjectSchema } from './EnumSubscriptionPlanFieldUpdateOperationsInput.schema';
import { SubscriptionStatusSchema } from '../enums/SubscriptionStatus.schema';
import { EnumSubscriptionStatusFieldUpdateOperationsInputObjectSchema } from './EnumSubscriptionStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  plan: z.union([SubscriptionPlanSchema, z.lazy(() => EnumSubscriptionPlanFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([SubscriptionStatusSchema, z.lazy(() => EnumSubscriptionStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  startDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  endDate: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  renewalDate: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  stripeId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tenantId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SubscriptionUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscriptionUncheckedUpdateInput>;
export const SubscriptionUncheckedUpdateInputObjectZodSchema = makeSchema();
