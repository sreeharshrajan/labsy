import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  customerId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const CustomerAddressCreateManyAddressInputObjectSchema: z.ZodType<Prisma.CustomerAddressCreateManyAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCreateManyAddressInput>;
export const CustomerAddressCreateManyAddressInputObjectZodSchema = makeSchema();
