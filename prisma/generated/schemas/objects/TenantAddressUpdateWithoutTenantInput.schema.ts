import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AddressUpdateOneRequiredWithoutTenantAddressesNestedInputObjectSchema } from './AddressUpdateOneRequiredWithoutTenantAddressesNestedInput.schema';
import { ReportUpdateManyWithoutLabAddressNestedInputObjectSchema } from './ReportUpdateManyWithoutLabAddressNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPrimary: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  address: z.lazy(() => AddressUpdateOneRequiredWithoutTenantAddressesNestedInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUpdateManyWithoutLabAddressNestedInputObjectSchema).optional()
}).strict();
export const TenantAddressUpdateWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantAddressUpdateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressUpdateWithoutTenantInput>;
export const TenantAddressUpdateWithoutTenantInputObjectZodSchema = makeSchema();
