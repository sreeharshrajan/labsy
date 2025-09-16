import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SubscriptionSelectObjectSchema } from './objects/SubscriptionSelect.schema';
import { SubscriptionIncludeObjectSchema } from './objects/SubscriptionInclude.schema';
import { SubscriptionWhereUniqueInputObjectSchema } from './objects/SubscriptionWhereUniqueInput.schema';

export const SubscriptionFindUniqueOrThrowSchema: z.ZodType<Prisma.SubscriptionFindUniqueOrThrowArgs> = z.object({ select: SubscriptionSelectObjectSchema.optional(), include: SubscriptionIncludeObjectSchema.optional(), where: SubscriptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SubscriptionFindUniqueOrThrowArgs>;

export const SubscriptionFindUniqueOrThrowZodSchema = z.object({ select: SubscriptionSelectObjectSchema.optional(), include: SubscriptionIncludeObjectSchema.optional(), where: SubscriptionWhereUniqueInputObjectSchema }).strict();