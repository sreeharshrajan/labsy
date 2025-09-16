import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { ReportDetailUncheckedUpdateManyWithoutReportTemplateNestedInputObjectSchema } from './ReportDetailUncheckedUpdateManyWithoutReportTemplateNestedInput.schema';
import { ReportParameterUncheckedUpdateManyWithoutTemplateNestedInputObjectSchema } from './ReportParameterUncheckedUpdateManyWithoutTemplateNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  unit: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  reference: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  serviceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ReportDetails: z.lazy(() => ReportDetailUncheckedUpdateManyWithoutReportTemplateNestedInputObjectSchema).optional(),
  ReportParameter: z.lazy(() => ReportParameterUncheckedUpdateManyWithoutTemplateNestedInputObjectSchema).optional()
}).strict();
export const ReportTemplateUncheckedUpdateWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportTemplateUncheckedUpdateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUncheckedUpdateWithoutTenantInput>;
export const ReportTemplateUncheckedUpdateWithoutTenantInputObjectZodSchema = makeSchema();
