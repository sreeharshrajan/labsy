import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema } from './TenantAddressUncheckedCreateNestedManyWithoutAddressInput.schema';
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
  tenantAddresses: z.lazy(() => TenantAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema),
  userAddresses: z.lazy(() => UserAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema),
  customerAddresses: z.lazy(() => CustomerAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema),
  doctorAddresses: z.lazy(() => DoctorAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema)
}).strict();
export const AddressUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AddressUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUncheckedCreateInput>;
export const AddressUncheckedCreateInputObjectZodSchema = makeSchema();
