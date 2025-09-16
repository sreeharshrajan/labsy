import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { TenantCreateNestedOneWithoutNotificationInputObjectSchema } from './TenantCreateNestedOneWithoutNotificationInput.schema'

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
  tenant: z.lazy(() => TenantCreateNestedOneWithoutNotificationInputObjectSchema)
}).strict();
export const NotificationCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateWithoutUserInput>;
export const NotificationCreateWithoutUserInputObjectZodSchema = makeSchema();
