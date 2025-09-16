import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogActionSchema } from '../enums/AuditLogAction.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  action: AuditLogActionSchema.optional(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  entity: z.string().optional().nullable(),
  entityId: z.string().optional().nullable(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  tenantId: z.string(),
  userId: z.string().optional().nullable()
}).strict();
export const AuditLogUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AuditLogUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogUncheckedCreateInput>;
export const AuditLogUncheckedCreateInputObjectZodSchema = makeSchema();
