import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ReportChangeLogActionSchema } from '../enums/ReportChangeLogAction.schema';
import { EnumReportChangeLogActionFieldUpdateOperationsInputObjectSchema } from './EnumReportChangeLogActionFieldUpdateOperationsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  reportId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  editVersion: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  changes: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  timestamp: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  conflictResolved: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([ReportChangeLogActionSchema, z.lazy(() => EnumReportChangeLogActionFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ReportChangeLogUncheckedUpdateManyWithoutChangedByInputObjectSchema: z.ZodType<Prisma.ReportChangeLogUncheckedUpdateManyWithoutChangedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogUncheckedUpdateManyWithoutChangedByInput>;
export const ReportChangeLogUncheckedUpdateManyWithoutChangedByInputObjectZodSchema = makeSchema();
