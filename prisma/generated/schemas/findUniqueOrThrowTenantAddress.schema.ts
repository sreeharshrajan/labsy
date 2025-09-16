import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantAddressSelectObjectSchema } from './objects/TenantAddressSelect.schema';
import { TenantAddressIncludeObjectSchema } from './objects/TenantAddressInclude.schema';
import { TenantAddressWhereUniqueInputObjectSchema } from './objects/TenantAddressWhereUniqueInput.schema';

export const TenantAddressFindUniqueOrThrowSchema: z.ZodType<Prisma.TenantAddressFindUniqueOrThrowArgs> = z.object({ select: TenantAddressSelectObjectSchema.optional(), include: TenantAddressIncludeObjectSchema.optional(), where: TenantAddressWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TenantAddressFindUniqueOrThrowArgs>;

export const TenantAddressFindUniqueOrThrowZodSchema = z.object({ select: TenantAddressSelectObjectSchema.optional(), include: TenantAddressIncludeObjectSchema.optional(), where: TenantAddressWhereUniqueInputObjectSchema }).strict();