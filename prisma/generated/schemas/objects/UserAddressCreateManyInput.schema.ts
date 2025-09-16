import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  addressId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const UserAddressCreateManyInputObjectSchema: z.ZodType<Prisma.UserAddressCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressCreateManyInput>;
export const UserAddressCreateManyInputObjectZodSchema = makeSchema();
