import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TenantAddressListRelationFilterObjectSchema } from './TenantAddressListRelationFilter.schema';
import { UserAddressListRelationFilterObjectSchema } from './UserAddressListRelationFilter.schema';
import { CustomerAddressListRelationFilterObjectSchema } from './CustomerAddressListRelationFilter.schema';
import { DoctorAddressListRelationFilterObjectSchema } from './DoctorAddressListRelationFilter.schema'

const addresswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AddressWhereInputObjectSchema), z.lazy(() => AddressWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AddressWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AddressWhereInputObjectSchema), z.lazy(() => AddressWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  line1: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  line2: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  city: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  state: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  zip: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  country: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  tenantAddresses: z.lazy(() => TenantAddressListRelationFilterObjectSchema).optional(),
  userAddresses: z.lazy(() => UserAddressListRelationFilterObjectSchema).optional(),
  customerAddresses: z.lazy(() => CustomerAddressListRelationFilterObjectSchema).optional(),
  doctorAddresses: z.lazy(() => DoctorAddressListRelationFilterObjectSchema).optional()
}).strict();
export const AddressWhereInputObjectSchema: z.ZodType<Prisma.AddressWhereInput> = addresswhereinputSchema as unknown as z.ZodType<Prisma.AddressWhereInput>;
export const AddressWhereInputObjectZodSchema = addresswhereinputSchema;
