import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportUncheckedCreateNestedManyWithoutCustomerAddressInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutCustomerAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  customerId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Report: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCustomerAddressInputObjectSchema).optional()
}).strict();
export const CustomerAddressUncheckedCreateWithoutAddressInputObjectSchema: z.ZodType<Prisma.CustomerAddressUncheckedCreateWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressUncheckedCreateWithoutAddressInput>;
export const CustomerAddressUncheckedCreateWithoutAddressInputObjectZodSchema = makeSchema();
