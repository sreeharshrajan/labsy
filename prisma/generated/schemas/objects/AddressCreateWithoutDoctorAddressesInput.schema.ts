import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressCreateNestedManyWithoutAddressInputObjectSchema } from './TenantAddressCreateNestedManyWithoutAddressInput.schema';
import { UserAddressCreateNestedManyWithoutAddressInputObjectSchema } from './UserAddressCreateNestedManyWithoutAddressInput.schema';
import { CustomerAddressCreateNestedManyWithoutAddressInputObjectSchema } from './CustomerAddressCreateNestedManyWithoutAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  line1: z.string(),
  line2: z.string().optional().nullable(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  tenantAddresses: z.lazy(() => TenantAddressCreateNestedManyWithoutAddressInputObjectSchema).optional(),
  userAddresses: z.lazy(() => UserAddressCreateNestedManyWithoutAddressInputObjectSchema).optional(),
  customerAddresses: z.lazy(() => CustomerAddressCreateNestedManyWithoutAddressInputObjectSchema).optional()
}).strict();
export const AddressCreateWithoutDoctorAddressesInputObjectSchema: z.ZodType<Prisma.AddressCreateWithoutDoctorAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateWithoutDoctorAddressesInput>;
export const AddressCreateWithoutDoctorAddressesInputObjectZodSchema = makeSchema();
