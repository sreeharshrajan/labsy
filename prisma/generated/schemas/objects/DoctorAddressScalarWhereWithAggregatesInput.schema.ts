import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const doctoraddressscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DoctorAddressScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DoctorAddressScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DoctorAddressScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DoctorAddressScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DoctorAddressScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  doctorId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  addressId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  isPrimary: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const DoctorAddressScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DoctorAddressScalarWhereWithAggregatesInput> = doctoraddressscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DoctorAddressScalarWhereWithAggregatesInput>;
export const DoctorAddressScalarWhereWithAggregatesInputObjectZodSchema = doctoraddressscalarwherewithaggregatesinputSchema;
