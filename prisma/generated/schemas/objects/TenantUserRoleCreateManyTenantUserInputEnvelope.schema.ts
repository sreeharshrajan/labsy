import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleCreateManyTenantUserInputObjectSchema } from './TenantUserRoleCreateManyTenantUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TenantUserRoleCreateManyTenantUserInputObjectSchema), z.lazy(() => TenantUserRoleCreateManyTenantUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TenantUserRoleCreateManyTenantUserInputEnvelopeObjectSchema: z.ZodType<Prisma.TenantUserRoleCreateManyTenantUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleCreateManyTenantUserInputEnvelope>;
export const TenantUserRoleCreateManyTenantUserInputEnvelopeObjectZodSchema = makeSchema();
