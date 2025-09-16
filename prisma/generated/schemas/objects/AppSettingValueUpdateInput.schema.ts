import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { AppSettingUpdateOneRequiredWithoutValuesNestedInputObjectSchema } from './AppSettingUpdateOneRequiredWithoutValuesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  setting: z.lazy(() => AppSettingUpdateOneRequiredWithoutValuesNestedInputObjectSchema).optional()
}).strict();
export const AppSettingValueUpdateInputObjectSchema: z.ZodType<Prisma.AppSettingValueUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueUpdateInput>;
export const AppSettingValueUpdateInputObjectZodSchema = makeSchema();
