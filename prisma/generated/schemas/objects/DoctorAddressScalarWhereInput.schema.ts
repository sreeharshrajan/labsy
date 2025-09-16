import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const doctoraddressscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DoctorAddressScalarWhereInputObjectSchema), z.lazy(() => DoctorAddressScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DoctorAddressScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DoctorAddressScalarWhereInputObjectSchema), z.lazy(() => DoctorAddressScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  doctorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  addressId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isPrimary: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const DoctorAddressScalarWhereInputObjectSchema: z.ZodType<Prisma.DoctorAddressScalarWhereInput> = doctoraddressscalarwhereinputSchema as unknown as z.ZodType<Prisma.DoctorAddressScalarWhereInput>;
export const DoctorAddressScalarWhereInputObjectZodSchema = doctoraddressscalarwhereinputSchema;
