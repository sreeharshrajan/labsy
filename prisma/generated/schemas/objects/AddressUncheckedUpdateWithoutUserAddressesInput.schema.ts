import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TenantAddressUncheckedUpdateManyWithoutAddressNestedInputObjectSchema } from './TenantAddressUncheckedUpdateManyWithoutAddressNestedInput.schema';
import { CustomerAddressUncheckedUpdateManyWithoutAddressNestedInputObjectSchema } from './CustomerAddressUncheckedUpdateManyWithoutAddressNestedInput.schema';
import { DoctorAddressUncheckedUpdateManyWithoutAddressNestedInputObjectSchema } from './DoctorAddressUncheckedUpdateManyWithoutAddressNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  line1: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  line2: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  city: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  state: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  zip: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  country: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenantAddresses: z.lazy(() => TenantAddressUncheckedUpdateManyWithoutAddressNestedInputObjectSchema).optional(),
  customerAddresses: z.lazy(() => CustomerAddressUncheckedUpdateManyWithoutAddressNestedInputObjectSchema).optional(),
  doctorAddresses: z.lazy(() => DoctorAddressUncheckedUpdateManyWithoutAddressNestedInputObjectSchema).optional()
}).strict();
export const AddressUncheckedUpdateWithoutUserAddressesInputObjectSchema: z.ZodType<Prisma.AddressUncheckedUpdateWithoutUserAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUncheckedUpdateWithoutUserAddressesInput>;
export const AddressUncheckedUpdateWithoutUserAddressesInputObjectZodSchema = makeSchema();
