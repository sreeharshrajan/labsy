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
  userId: z.string().optional().nullable()
}).strict();
export const AuditLogUncheckedCreateWithoutTenantInputObjectSchema: z.ZodType<Prisma.AuditLogUncheckedCreateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogUncheckedCreateWithoutTenantInput>;
export const AuditLogUncheckedCreateWithoutTenantInputObjectZodSchema = makeSchema();
