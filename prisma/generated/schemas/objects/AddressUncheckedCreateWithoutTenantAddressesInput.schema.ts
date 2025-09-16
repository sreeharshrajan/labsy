import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema } from './UserAddressUncheckedCreateNestedManyWithoutAddressInput.schema';
import { CustomerAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema } from './CustomerAddressUncheckedCreateNestedManyWithoutAddressInput.schema';
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
  userAddresses: z.lazy(() => UserAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema).optional(),
  customerAddresses: z.lazy(() => CustomerAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema).optional(),
  doctorAddresses: z.lazy(() => DoctorAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema).optional()
}).strict();
export const AddressUncheckedCreateWithoutTenantAddressesInputObjectSchema: z.ZodType<Prisma.AddressUncheckedCreateWithoutTenantAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUncheckedCreateWithoutTenantAddressesInput>;
export const AddressUncheckedCreateWithoutTenantAddressesInputObjectZodSchema = makeSchema();
