import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressCountOutputTypeSelectObjectSchema } from './CustomerAddressCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CustomerAddressCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CustomerAddressCountOutputTypeArgsObjectSchema = makeSchema();
export const CustomerAddressCountOutputTypeArgsObjectZodSchema = makeSchema();
