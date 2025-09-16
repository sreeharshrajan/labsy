import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressSelectObjectSchema } from './CustomerAddressSelect.schema';
import { CustomerAddressIncludeObjectSchema } from './CustomerAddressInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CustomerAddressSelectObjectSchema).optional(),
  include: z.lazy(() => CustomerAddressIncludeObjectSchema).optional()
}).strict();
export const CustomerAddressArgsObjectSchema = makeSchema();
export const CustomerAddressArgsObjectZodSchema = makeSchema();
