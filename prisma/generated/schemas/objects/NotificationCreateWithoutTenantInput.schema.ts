import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { UserCreateNestedOneWithoutNotificationInputObjectSchema } from './UserCreateNestedOneWithoutNotificationInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  type: z.string(),
  title: z.string(),
  message: z.string(),
  isRead: z.boolean().optional(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  readAt: z.coerce.date().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutNotificationInputObjectSchema).optional()
}).strict();
export const NotificationCreateWithoutTenantInputObjectSchema: z.ZodType<Prisma.NotificationCreateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateWithoutTenantInput>;
export const NotificationCreateWithoutTenantInputObjectZodSchema = makeSchema();
