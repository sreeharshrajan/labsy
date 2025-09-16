import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema } from './TenantAddressUncheckedCreateNestedManyWithoutAddressInput.schema';
import { UserAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema } from './UserAddressUncheckedCreateNestedManyWithoutAddressInput.schema';
import { CustomerAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema } from './CustomerAddressUncheckedCreateNestedManyWithoutAddressInput.schema'

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
  customerAddresses: z.lazy(() => CustomerAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema).optional()
}).strict();
export const AddressUncheckedCreateWithoutDoctorAddressesInputObjectSchema: z.ZodType<Prisma.AddressUncheckedCreateWithoutDoctorAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUncheckedCreateWithoutDoctorAddressesInput>;
export const AddressUncheckedCreateWithoutDoctorAddressesInputObjectZodSchema = makeSchema();
