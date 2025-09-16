import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateNestedOneWithoutCustomerAddressesInputObjectSchema } from './CustomerCreateNestedOneWithoutCustomerAddressesInput.schema';
import { AddressCreateNestedOneWithoutCustomerAddressesInputObjectSchema } from './AddressCreateNestedOneWithoutCustomerAddressesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutCustomerAddressesInputObjectSchema),
  address: z.lazy(() => AddressCreateNestedOneWithoutCustomerAddressesInputObjectSchema)
}).strict();
export const CustomerAddressCreateWithoutReportInputObjectSchema: z.ZodType<Prisma.CustomerAddressCreateWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCreateWithoutReportInput>;
export const CustomerAddressCreateWithoutReportInputObjectZodSchema = makeSchema();
