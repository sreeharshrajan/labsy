import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CustomerScalarRelationFilterObjectSchema } from './CustomerScalarRelationFilter.schema';
import { CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { AddressScalarRelationFilterObjectSchema } from './AddressScalarRelationFilter.schema';
import { AddressWhereInputObjectSchema } from './AddressWhereInput.schema';
import { ReportListRelationFilterObjectSchema } from './ReportListRelationFilter.schema'

const customeraddresswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomerAddressWhereInputObjectSchema), z.lazy(() => CustomerAddressWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomerAddressWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomerAddressWhereInputObjectSchema), z.lazy(() => CustomerAddressWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  customerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  addressId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isPrimary: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  customer: z.union([z.lazy(() => CustomerScalarRelationFilterObjectSchema), z.lazy(() => CustomerWhereInputObjectSchema)]).optional(),
  address: z.union([z.lazy(() => AddressScalarRelationFilterObjectSchema), z.lazy(() => AddressWhereInputObjectSchema)]).optional(),
  Report: z.lazy(() => ReportListRelationFilterObjectSchema).optional()
}).strict();
export const CustomerAddressWhereInputObjectSchema: z.ZodType<Prisma.CustomerAddressWhereInput> = customeraddresswhereinputSchema as unknown as z.ZodType<Prisma.CustomerAddressWhereInput>;
export const CustomerAddressWhereInputObjectZodSchema = customeraddresswhereinputSchema;
