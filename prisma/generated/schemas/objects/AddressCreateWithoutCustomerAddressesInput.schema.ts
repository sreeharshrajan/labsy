import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressCreateNestedManyWithoutAddressInputObjectSchema } from './TenantAddressCreateNestedManyWithoutAddressInput.schema';
import { UserAddressCreateNestedManyWithoutAddressInputObjectSchema } from './UserAddressCreateNestedManyWithoutAddressInput.schema';
import { DoctorAddressCreateNestedManyWithoutAddressInputObjectSchema } from './DoctorAddressCreateNestedManyWithoutAddressInput.schema'

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
  doctorAddresses: z.lazy(() => DoctorAddressCreateNestedManyWithoutAddressInputObjectSchema).optional()
}).strict();
export const AddressCreateWithoutCustomerAddressesInputObjectSchema: z.ZodType<Prisma.AddressCreateWithoutCustomerAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateWithoutCustomerAddressesInput>;
export const AddressCreateWithoutCustomerAddressesInputObjectZodSchema = makeSchema();
