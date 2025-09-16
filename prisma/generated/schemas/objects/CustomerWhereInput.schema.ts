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
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { ReportInvoiceListRelationFilterObjectSchema } from './ReportInvoiceListRelationFilter.schema';
import { ReportListRelationFilterObjectSchema } from './ReportListRelationFilter.schema';
import { CustomerAddressListRelationFilterObjectSchema } from './CustomerAddressListRelationFilter.schema'

const customerwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomerWhereInputObjectSchema), z.lazy(() => CustomerWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomerWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomerWhereInputObjectSchema), z.lazy(() => CustomerWhereInputObjectSchema).array()]).optional(),
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
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional(),
  ReportInvoice: z.lazy(() => ReportInvoiceListRelationFilterObjectSchema).optional(),
  Report: z.lazy(() => ReportListRelationFilterObjectSchema).optional(),
  customerAddresses: z.lazy(() => CustomerAddressListRelationFilterObjectSchema).optional()
}).strict();
export const CustomerWhereInputObjectSchema: z.ZodType<Prisma.CustomerWhereInput> = customerwhereinputSchema as unknown as z.ZodType<Prisma.CustomerWhereInput>;
export const CustomerWhereInputObjectZodSchema = customerwhereinputSchema;
