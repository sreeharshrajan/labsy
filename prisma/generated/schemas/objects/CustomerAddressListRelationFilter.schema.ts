import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressWhereInputObjectSchema } from './CustomerAddressWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CustomerAddressWhereInputObjectSchema).optional(),
  some: z.lazy(() => CustomerAddressWhereInputObjectSchema).optional(),
  none: z.lazy(() => CustomerAddressWhereInputObjectSchema).optional()
}).strict();
export const CustomerAddressListRelationFilterObjectSchema: z.ZodType<Prisma.CustomerAddressListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressListRelationFilter>;
export const CustomerAddressListRelationFilterObjectZodSchema = makeSchema();
