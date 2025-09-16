import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantAddressSelectObjectSchema } from './objects/TenantAddressSelect.schema';
import { TenantAddressIncludeObjectSchema } from './objects/TenantAddressInclude.schema';
import { TenantAddressWhereUniqueInputObjectSchema } from './objects/TenantAddressWhereUniqueInput.schema';

export const TenantAddressFindUniqueSchema: z.ZodType<Prisma.TenantAddressFindUniqueArgs> = z.object({ select: TenantAddressSelectObjectSchema.optional(), include: TenantAddressIncludeObjectSchema.optional(), where: TenantAddressWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TenantAddressFindUniqueArgs>;

export const TenantAddressFindUniqueZodSchema = z.object({ select: TenantAddressSelectObjectSchema.optional(), include: TenantAddressIncludeObjectSchema.optional(), where: TenantAddressWhereUniqueInputObjectSchema }).strict();