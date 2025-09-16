import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TenantUpdateOneRequiredWithoutReportTemplateNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutReportTemplateNestedInput.schema';
import { ReportDetailUpdateManyWithoutReportTemplateNestedInputObjectSchema } from './ReportDetailUpdateManyWithoutReportTemplateNestedInput.schema';
import { ReportParameterUpdateManyWithoutTemplateNestedInputObjectSchema } from './ReportParameterUpdateManyWithoutTemplateNestedInput.schema'

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
  tenant: z.lazy(() => TenantUpdateOneRequiredWithoutReportTemplateNestedInputObjectSchema).optional(),
  ReportDetails: z.lazy(() => ReportDetailUpdateManyWithoutReportTemplateNestedInputObjectSchema).optional(),
  ReportParameter: z.lazy(() => ReportParameterUpdateManyWithoutTemplateNestedInputObjectSchema).optional()
}).strict();
export const ReportTemplateUpdateWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportTemplateUpdateWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUpdateWithoutServiceInput>;
export const ReportTemplateUpdateWithoutServiceInputObjectZodSchema = makeSchema();
