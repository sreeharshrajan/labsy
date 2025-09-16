import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateManyTenantInputObjectSchema } from './TenantUserCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TenantUserCreateManyTenantInputObjectSchema), z.lazy(() => TenantUserCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TenantUserCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.TenantUserCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateManyTenantInputEnvelope>;
export const TenantUserCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
