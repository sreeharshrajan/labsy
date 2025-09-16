import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  tenantId: z.string(),
  type: z.string(),
  title: z.string(),
  message: z.string(),
  isRead: z.boolean().optional(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  readAt: z.coerce.date().optional().nullable()
}).strict();
export const NotificationCreateManyUserInputObjectSchema: z.ZodType<Prisma.NotificationCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateManyUserInput>;
export const NotificationCreateManyUserInputObjectZodSchema = makeSchema();
