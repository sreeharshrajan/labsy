import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TenantAddressUncheckedUpdateManyWithoutAddressNestedInputObjectSchema } from './TenantAddressUncheckedUpdateManyWithoutAddressNestedInput.schema';
import { UserAddressUncheckedUpdateManyWithoutAddressNestedInputObjectSchema } from './UserAddressUncheckedUpdateManyWithoutAddressNestedInput.schema';
import { CustomerAddressUncheckedUpdateManyWithoutAddressNestedInputObjectSchema } from './CustomerAddressUncheckedUpdateManyWithoutAddressNestedInput.schema'

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
  userAddresses: z.lazy(() => UserAddressUncheckedUpdateManyWithoutAddressNestedInputObjectSchema).optional(),
  customerAddresses: z.lazy(() => CustomerAddressUncheckedUpdateManyWithoutAddressNestedInputObjectSchema).optional()
}).strict();
export const AddressUncheckedUpdateWithoutDoctorAddressesInputObjectSchema: z.ZodType<Prisma.AddressUncheckedUpdateWithoutDoctorAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUncheckedUpdateWithoutDoctorAddressesInput>;
export const AddressUncheckedUpdateWithoutDoctorAddressesInputObjectZodSchema = makeSchema();
