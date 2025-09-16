import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressFindManySchema } from '../findManyTenantAddress.schema';
import { UserAddressFindManySchema } from '../findManyUserAddress.schema';
import { CustomerAddressFindManySchema } from '../findManyCustomerAddress.schema';
import { DoctorAddressFindManySchema } from '../findManyDoctorAddress.schema';
import { AddressCountOutputTypeArgsObjectSchema } from './AddressCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tenantAddresses: z.union([z.boolean(), z.lazy(() => TenantAddressFindManySchema)]).optional(),
  userAddresses: z.union([z.boolean(), z.lazy(() => UserAddressFindManySchema)]).optional(),
  customerAddresses: z.union([z.boolean(), z.lazy(() => CustomerAddressFindManySchema)]).optional(),
  doctorAddresses: z.union([z.boolean(), z.lazy(() => DoctorAddressFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AddressCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AddressIncludeObjectSchema: z.ZodType<Prisma.AddressInclude> = makeSchema() as unknown as z.ZodType<Prisma.AddressInclude>;
export const AddressIncludeObjectZodSchema = makeSchema();
