import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const customeraddressscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomerAddressScalarWhereInputObjectSchema), z.lazy(() => CustomerAddressScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomerAddressScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomerAddressScalarWhereInputObjectSchema), z.lazy(() => CustomerAddressScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  customerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  addressId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isPrimary: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CustomerAddressScalarWhereInputObjectSchema: z.ZodType<Prisma.CustomerAddressScalarWhereInput> = customeraddressscalarwhereinputSchema as unknown as z.ZodType<Prisma.CustomerAddressScalarWhereInput>;
export const CustomerAddressScalarWhereInputObjectZodSchema = customeraddressscalarwhereinputSchema;
