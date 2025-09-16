import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ServiceUpdateOneRequiredWithoutReportInvoiceItemNestedInputObjectSchema } from './ServiceUpdateOneRequiredWithoutReportInvoiceItemNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  discount: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  total: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  service: z.lazy(() => ServiceUpdateOneRequiredWithoutReportInvoiceItemNestedInputObjectSchema).optional()
}).strict();
export const ReportInvoiceItemUpdateWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemUpdateWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemUpdateWithoutInvoiceInput>;
export const ReportInvoiceItemUpdateWithoutInvoiceInputObjectZodSchema = makeSchema();
