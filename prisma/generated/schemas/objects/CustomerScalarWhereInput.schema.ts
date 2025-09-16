import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumUserTitleNullableFilterObjectSchema } from './EnumUserTitleNullableFilter.schema';
import { UserTitleSchema } from '../enums/UserTitle.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EnumGenderNullableFilterObjectSchema } from './EnumGenderNullableFilter.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { EnumBloodGroupNullableFilterObjectSchema } from './EnumBloodGroupNullableFilter.schema';
import { BloodGroupSchema } from '../enums/BloodGroup.schema';
import { EnumMaritalStatusNullableFilterObjectSchema } from './EnumMaritalStatusNullableFilter.schema';
import { MaritalStatusSchema } from '../enums/MaritalStatus.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const customerscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomerScalarWhereInputObjectSchema), z.lazy(() => CustomerScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomerScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomerScalarWhereInputObjectSchema), z.lazy(() => CustomerScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => EnumUserTitleNullableFilterObjectSchema), UserTitleSchema]).optional().nullable(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  dateOfBirth: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  gender: z.union([z.lazy(() => EnumGenderNullableFilterObjectSchema), GenderSchema]).optional().nullable(),
  bloodGroup: z.union([z.lazy(() => EnumBloodGroupNullableFilterObjectSchema), BloodGroupSchema]).optional().nullable(),
  maritalStatus: z.union([z.lazy(() => EnumMaritalStatusNullableFilterObjectSchema), MaritalStatusSchema]).optional().nullable(),
  aadharNumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  panNumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  passportNumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  knownAllergies: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  chronicConditions: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  medications: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const CustomerScalarWhereInputObjectSchema: z.ZodType<Prisma.CustomerScalarWhereInput> = customerscalarwhereinputSchema as unknown as z.ZodType<Prisma.CustomerScalarWhereInput>;
export const CustomerScalarWhereInputObjectZodSchema = customerscalarwhereinputSchema;
