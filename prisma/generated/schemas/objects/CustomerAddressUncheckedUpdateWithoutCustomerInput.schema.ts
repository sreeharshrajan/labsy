import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ReportUncheckedUpdateManyWithoutCustomerAddressNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutCustomerAddressNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  addressId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPrimary: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  Report: z.lazy(() => ReportUncheckedUpdateManyWithoutCustomerAddressNestedInputObjectSchema).optional()
}).strict();
export const CustomerAddressUncheckedUpdateWithoutCustomerInputObjectSchema: z.ZodType<Prisma.CustomerAddressUncheckedUpdateWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressUncheckedUpdateWithoutCustomerInput>;
export const CustomerAddressUncheckedUpdateWithoutCustomerInputObjectZodSchema = makeSchema();
