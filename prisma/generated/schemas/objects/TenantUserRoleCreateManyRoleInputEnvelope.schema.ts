import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleCreateManyRoleInputObjectSchema } from './TenantUserRoleCreateManyRoleInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TenantUserRoleCreateManyRoleInputObjectSchema), z.lazy(() => TenantUserRoleCreateManyRoleInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TenantUserRoleCreateManyRoleInputEnvelopeObjectSchema: z.ZodType<Prisma.TenantUserRoleCreateManyRoleInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleCreateManyRoleInputEnvelope>;
export const TenantUserRoleCreateManyRoleInputEnvelopeObjectZodSchema = makeSchema();
