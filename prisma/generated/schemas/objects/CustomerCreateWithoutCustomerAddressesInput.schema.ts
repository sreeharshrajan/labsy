import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTitleSchema } from '../enums/UserTitle.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { BloodGroupSchema } from '../enums/BloodGroup.schema';
import { MaritalStatusSchema } from '../enums/MaritalStatus.schema';
import { CustomerCreateknownAllergiesInputObjectSchema } from './CustomerCreateknownAllergiesInput.schema';
import { CustomerCreatechronicConditionsInputObjectSchema } from './CustomerCreatechronicConditionsInput.schema';
import { CustomerCreatemedicationsInputObjectSchema } from './CustomerCreatemedicationsInput.schema';
import { TenantCreateNestedOneWithoutCustomerInputObjectSchema } from './TenantCreateNestedOneWithoutCustomerInput.schema';
import { ReportInvoiceCreateNestedManyWithoutCustomerInputObjectSchema } from './ReportInvoiceCreateNestedManyWithoutCustomerInput.schema';
import { ReportCreateNestedManyWithoutCustomerInputObjectSchema } from './ReportCreateNestedManyWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: UserTitleSchema.optional().nullable(),
  name: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  dateOfBirth: z.coerce.date().optional().nullable(),
  gender: GenderSchema.optional().nullable(),
  bloodGroup: BloodGroupSchema.optional().nullable(),
  maritalStatus: MaritalStatusSchema.optional().nullable(),
  aadharNumber: z.string().optional().nullable(),
  panNumber: z.string().optional().nullable(),
  passportNumber: z.string().optional().nullable(),
  knownAllergies: z.union([z.lazy(() => CustomerCreateknownAllergiesInputObjectSchema), z.string().array()]).optional(),
  chronicConditions: z.union([z.lazy(() => CustomerCreatechronicConditionsInputObjectSchema), z.string().array()]).optional(),
  medications: z.union([z.lazy(() => CustomerCreatemedicationsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutCustomerInputObjectSchema),
  ReportInvoice: z.lazy(() => ReportInvoiceCreateNestedManyWithoutCustomerInputObjectSchema).optional(),
  Report: z.lazy(() => ReportCreateNestedManyWithoutCustomerInputObjectSchema).optional()
}).strict();
export const CustomerCreateWithoutCustomerAddressesInputObjectSchema: z.ZodType<Prisma.CustomerCreateWithoutCustomerAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateWithoutCustomerAddressesInput>;
export const CustomerCreateWithoutCustomerAddressesInputObjectZodSchema = makeSchema();
