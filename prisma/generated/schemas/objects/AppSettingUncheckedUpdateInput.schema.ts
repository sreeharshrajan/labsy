import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { AppSettingValueUncheckedUpdateManyWithoutSettingNestedInputObjectSchema } from './AppSettingValueUncheckedUpdateManyWithoutSettingNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  values: z.lazy(() => AppSettingValueUncheckedUpdateManyWithoutSettingNestedInputObjectSchema).optional()
}).strict();
export const AppSettingUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.AppSettingUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingUncheckedUpdateInput>;
export const AppSettingUncheckedUpdateInputObjectZodSchema = makeSchema();
