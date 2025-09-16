import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressFindManySchema } from '../findManyTenantAddress.schema';
import { UserAddressFindManySchema } from '../findManyUserAddress.schema';
import { CustomerAddressFindManySchema } from '../findManyCustomerAddress.schema';
import { DoctorAddressFindManySchema } from '../findManyDoctorAddress.schema';
import { AddressCountOutputTypeArgsObjectSchema } from './AddressCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  line1: z.boolean().optional(),
  line2: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  zip: z.boolean().optional(),
  country: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  tenantAddresses: z.union([z.boolean(), z.lazy(() => TenantAddressFindManySchema)]).optional(),
  userAddresses: z.union([z.boolean(), z.lazy(() => UserAddressFindManySchema)]).optional(),
  customerAddresses: z.union([z.boolean(), z.lazy(() => CustomerAddressFindManySchema)]).optional(),
  doctorAddresses: z.union([z.boolean(), z.lazy(() => DoctorAddressFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AddressCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AddressSelectObjectSchema: z.ZodType<Prisma.AddressSelect> = makeSchema() as unknown as z.ZodType<Prisma.AddressSelect>;
export const AddressSelectObjectZodSchema = makeSchema();
