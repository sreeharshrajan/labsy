import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationIncludeObjectSchema } from './objects/NotificationInclude.schema';
import { NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';

export const NotificationFindUniqueOrThrowSchema: z.ZodType<Prisma.NotificationFindUniqueOrThrowArgs> = z.object({ select: NotificationSelectObjectSchema.optional(), include: NotificationIncludeObjectSchema.optional(), where: NotificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NotificationFindUniqueOrThrowArgs>;

export const NotificationFindUniqueOrThrowZodSchema = z.object({ select: NotificationSelectObjectSchema.optional(), include: NotificationIncludeObjectSchema.optional(), where: NotificationWhereUniqueInputObjectSchema }).strict();