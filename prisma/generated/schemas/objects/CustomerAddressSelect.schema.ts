import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerArgsObjectSchema } from './CustomerArgs.schema';
import { AddressArgsObjectSchema } from './AddressArgs.schema';
import { ReportFindManySchema } from '../findManyReport.schema';
import { CustomerAddressCountOutputTypeArgsObjectSchema } from './CustomerAddressCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  customerId: z.boolean().optional(),
  addressId: z.boolean().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  customer: z.union([z.boolean(), z.lazy(() => CustomerArgsObjectSchema)]).optional(),
  address: z.union([z.boolean(), z.lazy(() => AddressArgsObjectSchema)]).optional(),
  Report: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CustomerAddressCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CustomerAddressSelectObjectSchema: z.ZodType<Prisma.CustomerAddressSelect> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressSelect>;
export const CustomerAddressSelectObjectZodSchema = makeSchema();
