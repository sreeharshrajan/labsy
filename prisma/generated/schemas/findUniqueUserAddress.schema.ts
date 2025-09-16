import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserAddressSelectObjectSchema } from './objects/UserAddressSelect.schema';
import { UserAddressIncludeObjectSchema } from './objects/UserAddressInclude.schema';
import { UserAddressWhereUniqueInputObjectSchema } from './objects/UserAddressWhereUniqueInput.schema';

export const UserAddressFindUniqueSchema: z.ZodType<Prisma.UserAddressFindUniqueArgs> = z.object({ select: UserAddressSelectObjectSchema.optional(), include: UserAddressIncludeObjectSchema.optional(), where: UserAddressWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserAddressFindUniqueArgs>;

export const UserAddressFindUniqueZodSchema = z.object({ select: UserAddressSelectObjectSchema.optional(), include: UserAddressIncludeObjectSchema.optional(), where: UserAddressWhereUniqueInputObjectSchema }).strict();