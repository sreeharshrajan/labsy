import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TenantAddressUpdateManyWithoutAddressNestedInputObjectSchema } from './TenantAddressUpdateManyWithoutAddressNestedInput.schema';
import { CustomerAddressUpdateManyWithoutAddressNestedInputObjectSchema } from './CustomerAddressUpdateManyWithoutAddressNestedInput.schema';
import { DoctorAddressUpdateManyWithoutAddressNestedInputObjectSchema } from './DoctorAddressUpdateManyWithoutAddressNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  line1: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  line2: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  city: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  state: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  zip: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  country: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenantAddresses: z.lazy(() => TenantAddressUpdateManyWithoutAddressNestedInputObjectSchema).optional(),
  customerAddresses: z.lazy(() => CustomerAddressUpdateManyWithoutAddressNestedInputObjectSchema).optional(),
  doctorAddresses: z.lazy(() => DoctorAddressUpdateManyWithoutAddressNestedInputObjectSchema).optional()
}).strict();
export const AddressUpdateWithoutUserAddressesInputObjectSchema: z.ZodType<Prisma.AddressUpdateWithoutUserAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUpdateWithoutUserAddressesInput>;
export const AddressUpdateWithoutUserAddressesInputObjectZodSchema = makeSchema();
