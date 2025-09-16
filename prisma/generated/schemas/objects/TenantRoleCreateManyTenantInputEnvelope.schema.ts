import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleCreateManyTenantInputObjectSchema } from './TenantRoleCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TenantRoleCreateManyTenantInputObjectSchema), z.lazy(() => TenantRoleCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TenantRoleCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.TenantRoleCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCreateManyTenantInputEnvelope>;
export const TenantRoleCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
