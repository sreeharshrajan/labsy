import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { ReportInvoiceItemUncheckedUpdateManyWithoutServiceNestedInputObjectSchema } from './ReportInvoiceItemUncheckedUpdateManyWithoutServiceNestedInput.schema';
import { ReportDetailUncheckedUpdateManyWithoutServiceNestedInputObjectSchema } from './ReportDetailUncheckedUpdateManyWithoutServiceNestedInput.schema';
import { ReportTemplateUncheckedUpdateManyWithoutServiceNestedInputObjectSchema } from './ReportTemplateUncheckedUpdateManyWithoutServiceNestedInput.schema';
import { ReportInvoiceUncheckedUpdateManyWithoutServiceNestedInputObjectSchema } from './ReportInvoiceUncheckedUpdateManyWithoutServiceNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tenantId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ReportInvoiceItem: z.lazy(() => ReportInvoiceItemUncheckedUpdateManyWithoutServiceNestedInputObjectSchema).optional(),
  ReportDetail: z.lazy(() => ReportDetailUncheckedUpdateManyWithoutServiceNestedInputObjectSchema).optional(),
  ReportTemplate: z.lazy(() => ReportTemplateUncheckedUpdateManyWithoutServiceNestedInputObjectSchema).optional(),
  ReportInvoice: z.lazy(() => ReportInvoiceUncheckedUpdateManyWithoutServiceNestedInputObjectSchema).optional()
}).strict();
export const ServiceUncheckedUpdateWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ServiceUncheckedUpdateWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUncheckedUpdateWithoutCategoryInput>;
export const ServiceUncheckedUpdateWithoutCategoryInputObjectZodSchema = makeSchema();
