import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const UserAddressCreateManyAddressInputObjectSchema: z.ZodType<Prisma.UserAddressCreateManyAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressCreateManyAddressInput>;
export const UserAddressCreateManyAddressInputObjectZodSchema = makeSchema();
