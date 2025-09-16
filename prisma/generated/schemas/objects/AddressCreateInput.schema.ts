import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressCreateNestedManyWithoutAddressInputObjectSchema } from './TenantAddressCreateNestedManyWithoutAddressInput.schema';
import { UserAddressCreateNestedManyWithoutAddressInputObjectSchema } from './UserAddressCreateNestedManyWithoutAddressInput.schema';
import { CustomerAddressCreateNestedManyWithoutAddressInputObjectSchema } from './CustomerAddressCreateNestedManyWithoutAddressInput.schema';
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
  tenantAddresses: z.lazy(() => TenantAddressCreateNestedManyWithoutAddressInputObjectSchema),
  userAddresses: z.lazy(() => UserAddressCreateNestedManyWithoutAddressInputObjectSchema),
  customerAddresses: z.lazy(() => CustomerAddressCreateNestedManyWithoutAddressInputObjectSchema),
  doctorAddresses: z.lazy(() => DoctorAddressCreateNestedManyWithoutAddressInputObjectSchema)
}).strict();
export const AddressCreateInputObjectSchema: z.ZodType<Prisma.AddressCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateInput>;
export const AddressCreateInputObjectZodSchema = makeSchema();
