import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  addressId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const UserAddressUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserAddressUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressUncheckedCreateWithoutUserInput>;
export const UserAddressUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
