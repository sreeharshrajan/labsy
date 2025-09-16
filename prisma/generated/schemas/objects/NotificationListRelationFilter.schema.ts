import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationWhereInputObjectSchema } from './NotificationWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => NotificationWhereInputObjectSchema).optional(),
  some: z.lazy(() => NotificationWhereInputObjectSchema).optional(),
  none: z.lazy(() => NotificationWhereInputObjectSchema).optional()
}).strict();
export const NotificationListRelationFilterObjectSchema: z.ZodType<Prisma.NotificationListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.NotificationListRelationFilter>;
export const NotificationListRelationFilterObjectZodSchema = makeSchema();
