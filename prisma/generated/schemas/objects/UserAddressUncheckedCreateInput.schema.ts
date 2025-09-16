import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  addressId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const UserAddressUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserAddressUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressUncheckedCreateInput>;
export const UserAddressUncheckedCreateInputObjectZodSchema = makeSchema();
