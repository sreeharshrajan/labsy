import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ReportUncheckedUpdateManyWithoutLabAddressNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutLabAddressNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenantId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPrimary: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  Report: z.lazy(() => ReportUncheckedUpdateManyWithoutLabAddressNestedInputObjectSchema).optional()
}).strict();
export const TenantAddressUncheckedUpdateWithoutAddressInputObjectSchema: z.ZodType<Prisma.TenantAddressUncheckedUpdateWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressUncheckedUpdateWithoutAddressInput>;
export const TenantAddressUncheckedUpdateWithoutAddressInputObjectZodSchema = makeSchema();
