import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportUncheckedCreateNestedManyWithoutCustomerAddressInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutCustomerAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  addressId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Report: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCustomerAddressInputObjectSchema).optional()
}).strict();
export const CustomerAddressUncheckedCreateWithoutCustomerInputObjectSchema: z.ZodType<Prisma.CustomerAddressUncheckedCreateWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressUncheckedCreateWithoutCustomerInput>;
export const CustomerAddressUncheckedCreateWithoutCustomerInputObjectZodSchema = makeSchema();
