import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserAddressSelectObjectSchema } from './objects/UserAddressSelect.schema';
import { UserAddressIncludeObjectSchema } from './objects/UserAddressInclude.schema';
import { UserAddressWhereUniqueInputObjectSchema } from './objects/UserAddressWhereUniqueInput.schema';

export const UserAddressFindUniqueOrThrowSchema: z.ZodType<Prisma.UserAddressFindUniqueOrThrowArgs> = z.object({ select: UserAddressSelectObjectSchema.optional(), include: UserAddressIncludeObjectSchema.optional(), where: UserAddressWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserAddressFindUniqueOrThrowArgs>;

export const UserAddressFindUniqueOrThrowZodSchema = z.object({ select: UserAddressSelectObjectSchema.optional(), include: UserAddressIncludeObjectSchema.optional(), where: UserAddressWhereUniqueInputObjectSchema }).strict();