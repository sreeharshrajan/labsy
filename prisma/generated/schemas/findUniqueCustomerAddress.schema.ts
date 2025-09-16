import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CustomerAddressSelectObjectSchema } from './objects/CustomerAddressSelect.schema';
import { CustomerAddressIncludeObjectSchema } from './objects/CustomerAddressInclude.schema';
import { CustomerAddressWhereUniqueInputObjectSchema } from './objects/CustomerAddressWhereUniqueInput.schema';

export const CustomerAddressFindUniqueSchema: z.ZodType<Prisma.CustomerAddressFindUniqueArgs> = z.object({ select: CustomerAddressSelectObjectSchema.optional(), include: CustomerAddressIncludeObjectSchema.optional(), where: CustomerAddressWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomerAddressFindUniqueArgs>;

export const CustomerAddressFindUniqueZodSchema = z.object({ select: CustomerAddressSelectObjectSchema.optional(), include: CustomerAddressIncludeObjectSchema.optional(), where: CustomerAddressWhereUniqueInputObjectSchema }).strict();