import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantPermissionCreateManyRoleInputObjectSchema } from './TenantPermissionCreateManyRoleInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TenantPermissionCreateManyRoleInputObjectSchema), z.lazy(() => TenantPermissionCreateManyRoleInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TenantPermissionCreateManyRoleInputEnvelopeObjectSchema: z.ZodType<Prisma.TenantPermissionCreateManyRoleInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionCreateManyRoleInputEnvelope>;
export const TenantPermissionCreateManyRoleInputEnvelopeObjectZodSchema = makeSchema();
