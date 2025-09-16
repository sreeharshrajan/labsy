import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ReportChangeLogActionSchema } from '../enums/ReportChangeLogAction.schema';
import { EnumReportChangeLogActionFieldUpdateOperationsInputObjectSchema } from './EnumReportChangeLogActionFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutReportChangeLogNestedInputObjectSchema } from './UserUpdateOneWithoutReportChangeLogNestedInput.schema';
import { TenantUserUpdateOneRequiredWithoutReportUpdatesNestedInputObjectSchema } from './TenantUserUpdateOneRequiredWithoutReportUpdatesNestedInput.schema';
import { ReportUpdateOneRequiredWithoutUpdateLogNestedInputObjectSchema } from './ReportUpdateOneRequiredWithoutUpdateLogNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  editVersion: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  changes: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  timestamp: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  conflictResolved: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([ReportChangeLogActionSchema, z.lazy(() => EnumReportChangeLogActionFieldUpdateOperationsInputObjectSchema)]).optional(),
  User: z.lazy(() => UserUpdateOneWithoutReportChangeLogNestedInputObjectSchema).optional(),
  changedBy: z.lazy(() => TenantUserUpdateOneRequiredWithoutReportUpdatesNestedInputObjectSchema).optional(),
  report: z.lazy(() => ReportUpdateOneRequiredWithoutUpdateLogNestedInputObjectSchema).optional()
}).strict();
export const ReportChangeLogUpdateInputObjectSchema: z.ZodType<Prisma.ReportChangeLogUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogUpdateInput>;
export const ReportChangeLogUpdateInputObjectZodSchema = makeSchema();
