import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCreateNestedOneWithoutCustomerAddressesInputObjectSchema } from './AddressCreateNestedOneWithoutCustomerAddressesInput.schema';
import { ReportCreateNestedManyWithoutCustomerAddressInputObjectSchema } from './ReportCreateNestedManyWithoutCustomerAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutCustomerAddressesInputObjectSchema),
  Report: z.lazy(() => ReportCreateNestedManyWithoutCustomerAddressInputObjectSchema).optional()
}).strict();
export const CustomerAddressCreateWithoutCustomerInputObjectSchema: z.ZodType<Prisma.CustomerAddressCreateWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCreateWithoutCustomerInput>;
export const CustomerAddressCreateWithoutCustomerInputObjectZodSchema = makeSchema();
