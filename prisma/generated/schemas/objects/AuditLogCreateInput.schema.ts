import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogActionSchema } from '../enums/AuditLogAction.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { TenantCreateNestedOneWithoutAuditLogsInputObjectSchema } from './TenantCreateNestedOneWithoutAuditLogsInput.schema';
import { UserCreateNestedOneWithoutAuditLogsInputObjectSchema } from './UserCreateNestedOneWithoutAuditLogsInput.schema'

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
  tenant: z.lazy(() => TenantCreateNestedOneWithoutAuditLogsInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutAuditLogsInputObjectSchema).optional()
}).strict();
export const AuditLogCreateInputObjectSchema: z.ZodType<Prisma.AuditLogCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogCreateInput>;
export const AuditLogCreateInputObjectZodSchema = makeSchema();
