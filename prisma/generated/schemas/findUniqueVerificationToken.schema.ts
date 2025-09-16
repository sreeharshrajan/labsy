import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { VerificationTokenSelectObjectSchema } from './objects/VerificationTokenSelect.schema';
import { VerificationTokenWhereUniqueInputObjectSchema } from './objects/VerificationTokenWhereUniqueInput.schema';

export const VerificationTokenFindUniqueSchema: z.ZodType<Prisma.VerificationTokenFindUniqueArgs> = z.object({ select: VerificationTokenSelectObjectSchema.optional(),  where: VerificationTokenWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VerificationTokenFindUniqueArgs>;

export const VerificationTokenFindUniqueZodSchema = z.object({ select: VerificationTokenSelectObjectSchema.optional(),  where: VerificationTokenWhereUniqueInputObjectSchema }).strict();