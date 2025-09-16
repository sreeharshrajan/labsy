import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogActionSchema } from '../enums/AuditLogAction.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { TenantCreateNestedOneWithoutAuditLogsInputObjectSchema } from './TenantCreateNestedOneWithoutAuditLogsInput.schema'

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
  tenant: z.lazy(() => TenantCreateNestedOneWithoutAuditLogsInputObjectSchema)
}).strict();
export const AuditLogCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.AuditLogCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogCreateWithoutUserInput>;
export const AuditLogCreateWithoutUserInputObjectZodSchema = makeSchema();
