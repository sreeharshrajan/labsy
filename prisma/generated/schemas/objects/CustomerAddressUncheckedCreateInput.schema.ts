import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportUncheckedCreateNestedManyWithoutCustomerAddressInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutCustomerAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  customerId: z.string(),
  addressId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Report: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCustomerAddressInputObjectSchema)
}).strict();
export const CustomerAddressUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CustomerAddressUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressUncheckedCreateInput>;
export const CustomerAddressUncheckedCreateInputObjectZodSchema = makeSchema();
