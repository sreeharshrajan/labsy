import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CustomerUpdateOneRequiredWithoutCustomerAddressesNestedInputObjectSchema } from './CustomerUpdateOneRequiredWithoutCustomerAddressesNestedInput.schema';
import { AddressUpdateOneRequiredWithoutCustomerAddressesNestedInputObjectSchema } from './AddressUpdateOneRequiredWithoutCustomerAddressesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPrimary: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  customer: z.lazy(() => CustomerUpdateOneRequiredWithoutCustomerAddressesNestedInputObjectSchema).optional(),
  address: z.lazy(() => AddressUpdateOneRequiredWithoutCustomerAddressesNestedInputObjectSchema).optional()
}).strict();
export const CustomerAddressUpdateWithoutReportInputObjectSchema: z.ZodType<Prisma.CustomerAddressUpdateWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressUpdateWithoutReportInput>;
export const CustomerAddressUpdateWithoutReportInputObjectZodSchema = makeSchema();
