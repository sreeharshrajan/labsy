import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateNestedOneWithoutCustomerAddressesInputObjectSchema } from './CustomerCreateNestedOneWithoutCustomerAddressesInput.schema';
import { AddressCreateNestedOneWithoutCustomerAddressesInputObjectSchema } from './AddressCreateNestedOneWithoutCustomerAddressesInput.schema';
import { ReportCreateNestedManyWithoutCustomerAddressInputObjectSchema } from './ReportCreateNestedManyWithoutCustomerAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutCustomerAddressesInputObjectSchema),
  address: z.lazy(() => AddressCreateNestedOneWithoutCustomerAddressesInputObjectSchema),
  Report: z.lazy(() => ReportCreateNestedManyWithoutCustomerAddressInputObjectSchema)
}).strict();
export const CustomerAddressCreateInputObjectSchema: z.ZodType<Prisma.CustomerAddressCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCreateInput>;
export const CustomerAddressCreateInputObjectZodSchema = makeSchema();
