import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const UserAddressUncheckedCreateWithoutAddressInputObjectSchema: z.ZodType<Prisma.UserAddressUncheckedCreateWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressUncheckedCreateWithoutAddressInput>;
export const UserAddressUncheckedCreateWithoutAddressInputObjectZodSchema = makeSchema();
