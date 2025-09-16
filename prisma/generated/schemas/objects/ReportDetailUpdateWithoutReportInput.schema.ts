import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { ReportParameterUpdateOneRequiredWithoutDetailsNestedInputObjectSchema } from './ReportParameterUpdateOneRequiredWithoutDetailsNestedInput.schema';
import { ServiceUpdateOneWithoutReportDetailNestedInputObjectSchema } from './ServiceUpdateOneWithoutReportDetailNestedInput.schema';
import { ReportTemplateUpdateOneWithoutReportDetailsNestedInputObjectSchema } from './ReportTemplateUpdateOneWithoutReportDetailsNestedInput.schema';
import { DoctorCommissionLogUpdateManyWithoutReportDetailNestedInputObjectSchema } from './DoctorCommissionLogUpdateManyWithoutReportDetailNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  parameterName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  parameterUnit: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  parameterReferenceMin: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  parameterReferenceMax: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  resultText: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  resultValue: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  remarks: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  amount: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastEditedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  parameter: z.lazy(() => ReportParameterUpdateOneRequiredWithoutDetailsNestedInputObjectSchema).optional(),
  Service: z.lazy(() => ServiceUpdateOneWithoutReportDetailNestedInputObjectSchema).optional(),
  ReportTemplate: z.lazy(() => ReportTemplateUpdateOneWithoutReportDetailsNestedInputObjectSchema).optional(),
  DoctorCommissionLog: z.lazy(() => DoctorCommissionLogUpdateManyWithoutReportDetailNestedInputObjectSchema).optional()
}).strict();
export const ReportDetailUpdateWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportDetailUpdateWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpdateWithoutReportInput>;
export const ReportDetailUpdateWithoutReportInputObjectZodSchema = makeSchema();
