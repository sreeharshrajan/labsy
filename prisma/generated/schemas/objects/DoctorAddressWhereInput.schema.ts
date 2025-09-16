import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DoctorScalarRelationFilterObjectSchema } from './DoctorScalarRelationFilter.schema';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { AddressScalarRelationFilterObjectSchema } from './AddressScalarRelationFilter.schema';
import { AddressWhereInputObjectSchema } from './AddressWhereInput.schema'

const doctoraddresswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DoctorAddressWhereInputObjectSchema), z.lazy(() => DoctorAddressWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DoctorAddressWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DoctorAddressWhereInputObjectSchema), z.lazy(() => DoctorAddressWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  doctorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  addressId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isPrimary: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  doctor: z.union([z.lazy(() => DoctorScalarRelationFilterObjectSchema), z.lazy(() => DoctorWhereInputObjectSchema)]).optional(),
  address: z.union([z.lazy(() => AddressScalarRelationFilterObjectSchema), z.lazy(() => AddressWhereInputObjectSchema)]).optional()
}).strict();
export const DoctorAddressWhereInputObjectSchema: z.ZodType<Prisma.DoctorAddressWhereInput> = doctoraddresswhereinputSchema as unknown as z.ZodType<Prisma.DoctorAddressWhereInput>;
export const DoctorAddressWhereInputObjectZodSchema = doctoraddresswhereinputSchema;
