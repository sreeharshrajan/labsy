import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CustomerUpdateOneRequiredWithoutCustomerAddressesNestedInputObjectSchema } from './CustomerUpdateOneRequiredWithoutCustomerAddressesNestedInput.schema';
import { ReportUpdateManyWithoutCustomerAddressNestedInputObjectSchema } from './ReportUpdateManyWithoutCustomerAddressNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPrimary: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  customer: z.lazy(() => CustomerUpdateOneRequiredWithoutCustomerAddressesNestedInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUpdateManyWithoutCustomerAddressNestedInputObjectSchema).optional()
}).strict();
export const CustomerAddressUpdateWithoutAddressInputObjectSchema: z.ZodType<Prisma.CustomerAddressUpdateWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressUpdateWithoutAddressInput>;
export const CustomerAddressUpdateWithoutAddressInputObjectZodSchema = makeSchema();
