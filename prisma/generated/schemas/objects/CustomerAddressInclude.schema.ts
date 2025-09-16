import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerArgsObjectSchema } from './CustomerArgs.schema';
import { AddressArgsObjectSchema } from './AddressArgs.schema';
import { ReportFindManySchema } from '../findManyReport.schema';
import { CustomerAddressCountOutputTypeArgsObjectSchema } from './CustomerAddressCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  customer: z.union([z.boolean(), z.lazy(() => CustomerArgsObjectSchema)]).optional(),
  address: z.union([z.boolean(), z.lazy(() => AddressArgsObjectSchema)]).optional(),
  Report: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CustomerAddressCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CustomerAddressIncludeObjectSchema: z.ZodType<Prisma.CustomerAddressInclude> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressInclude>;
export const CustomerAddressIncludeObjectZodSchema = makeSchema();
