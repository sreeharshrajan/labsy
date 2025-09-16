import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateNestedOneWithoutCustomerAddressesInputObjectSchema } from './CustomerCreateNestedOneWithoutCustomerAddressesInput.schema';
import { ReportCreateNestedManyWithoutCustomerAddressInputObjectSchema } from './ReportCreateNestedManyWithoutCustomerAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutCustomerAddressesInputObjectSchema),
  Report: z.lazy(() => ReportCreateNestedManyWithoutCustomerAddressInputObjectSchema).optional()
}).strict();
export const CustomerAddressCreateWithoutAddressInputObjectSchema: z.ZodType<Prisma.CustomerAddressCreateWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCreateWithoutAddressInput>;
export const CustomerAddressCreateWithoutAddressInputObjectZodSchema = makeSchema();
