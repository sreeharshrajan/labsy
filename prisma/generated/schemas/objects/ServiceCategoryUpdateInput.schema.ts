import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TenantUpdateOneRequiredWithoutServiceCategoryNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutServiceCategoryNestedInput.schema';
import { ServiceUpdateManyWithoutCategoryNestedInputObjectSchema } from './ServiceUpdateManyWithoutCategoryNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenant: z.lazy(() => TenantUpdateOneRequiredWithoutServiceCategoryNestedInputObjectSchema).optional(),
  services: z.lazy(() => ServiceUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
export const ServiceCategoryUpdateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUpdateInput>;
export const ServiceCategoryUpdateInputObjectZodSchema = makeSchema();
