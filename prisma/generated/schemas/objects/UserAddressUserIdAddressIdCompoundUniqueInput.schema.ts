import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  userId: z.string(),
  addressId: z.string()
}).strict();
export const UserAddressUserIdAddressIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.UserAddressUserIdAddressIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressUserIdAddressIdCompoundUniqueInput>;
export const UserAddressUserIdAddressIdCompoundUniqueInputObjectZodSchema = makeSchema();
