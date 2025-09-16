import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TenantUpdateOneRequiredWithoutServiceNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutServiceNestedInput.schema';
import { ReportInvoiceItemUpdateManyWithoutServiceNestedInputObjectSchema } from './ReportInvoiceItemUpdateManyWithoutServiceNestedInput.schema';
import { ReportDetailUpdateManyWithoutServiceNestedInputObjectSchema } from './ReportDetailUpdateManyWithoutServiceNestedInput.schema';
import { ReportTemplateUpdateManyWithoutServiceNestedInputObjectSchema } from './ReportTemplateUpdateManyWithoutServiceNestedInput.schema';
import { ReportInvoiceUpdateManyWithoutServiceNestedInputObjectSchema } from './ReportInvoiceUpdateManyWithoutServiceNestedInput.schema'

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
  Tenant: z.lazy(() => TenantUpdateOneRequiredWithoutServiceNestedInputObjectSchema).optional(),
  ReportInvoiceItem: z.lazy(() => ReportInvoiceItemUpdateManyWithoutServiceNestedInputObjectSchema).optional(),
  ReportDetail: z.lazy(() => ReportDetailUpdateManyWithoutServiceNestedInputObjectSchema).optional(),
  ReportTemplate: z.lazy(() => ReportTemplateUpdateManyWithoutServiceNestedInputObjectSchema).optional(),
  ReportInvoice: z.lazy(() => ReportInvoiceUpdateManyWithoutServiceNestedInputObjectSchema).optional()
}).strict();
export const ServiceUpdateWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ServiceUpdateWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateWithoutCategoryInput>;
export const ServiceUpdateWithoutCategoryInputObjectZodSchema = makeSchema();
