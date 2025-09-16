import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema } from './TenantAddressUncheckedCreateNestedManyWithoutAddressInput.schema';
import { UserAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema } from './UserAddressUncheckedCreateNestedManyWithoutAddressInput.schema';
import { DoctorAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema } from './DoctorAddressUncheckedCreateNestedManyWithoutAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  line1: z.string(),
  line2: z.string().optional().nullable(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  tenantAddresses: z.lazy(() => TenantAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema).optional(),
  userAddresses: z.lazy(() => UserAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema).optional(),
  doctorAddresses: z.lazy(() => DoctorAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema).optional()
}).strict();
export const AddressUncheckedCreateWithoutCustomerAddressesInputObjectSchema: z.ZodType<Prisma.AddressUncheckedCreateWithoutCustomerAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUncheckedCreateWithoutCustomerAddressesInput>;
export const AddressUncheckedCreateWithoutCustomerAddressesInputObjectZodSchema = makeSchema();
