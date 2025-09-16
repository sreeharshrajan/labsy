import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ReportInvoiceUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './ReportInvoiceUpdateOneRequiredWithoutItemsNestedInput.schema';
import { ServiceUpdateOneRequiredWithoutReportInvoiceItemNestedInputObjectSchema } from './ServiceUpdateOneRequiredWithoutReportInvoiceItemNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  discount: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  total: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  invoice: z.lazy(() => ReportInvoiceUpdateOneRequiredWithoutItemsNestedInputObjectSchema).optional(),
  service: z.lazy(() => ServiceUpdateOneRequiredWithoutReportInvoiceItemNestedInputObjectSchema).optional()
}).strict();
export const ReportInvoiceItemUpdateInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemUpdateInput>;
export const ReportInvoiceItemUpdateInputObjectZodSchema = makeSchema();
