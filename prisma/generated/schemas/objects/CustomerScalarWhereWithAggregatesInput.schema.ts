import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumUserTitleNullableWithAggregatesFilterObjectSchema } from './EnumUserTitleNullableWithAggregatesFilter.schema';
import { UserTitleSchema } from '../enums/UserTitle.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { EnumGenderNullableWithAggregatesFilterObjectSchema } from './EnumGenderNullableWithAggregatesFilter.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { EnumBloodGroupNullableWithAggregatesFilterObjectSchema } from './EnumBloodGroupNullableWithAggregatesFilter.schema';
import { BloodGroupSchema } from '../enums/BloodGroup.schema';
import { EnumMaritalStatusNullableWithAggregatesFilterObjectSchema } from './EnumMaritalStatusNullableWithAggregatesFilter.schema';
import { MaritalStatusSchema } from '../enums/MaritalStatus.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const customerscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomerScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CustomerScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomerScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomerScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CustomerScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => EnumUserTitleNullableWithAggregatesFilterObjectSchema), UserTitleSchema]).optional().nullable(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  dateOfBirth: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  gender: z.union([z.lazy(() => EnumGenderNullableWithAggregatesFilterObjectSchema), GenderSchema]).optional().nullable(),
  bloodGroup: z.union([z.lazy(() => EnumBloodGroupNullableWithAggregatesFilterObjectSchema), BloodGroupSchema]).optional().nullable(),
  maritalStatus: z.union([z.lazy(() => EnumMaritalStatusNullableWithAggregatesFilterObjectSchema), MaritalStatusSchema]).optional().nullable(),
  aadharNumber: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  panNumber: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  passportNumber: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  knownAllergies: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  chronicConditions: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  medications: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  tenantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const CustomerScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CustomerScalarWhereWithAggregatesInput> = customerscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CustomerScalarWhereWithAggregatesInput>;
export const CustomerScalarWhereWithAggregatesInputObjectZodSchema = customerscalarwherewithaggregatesinputSchema;
