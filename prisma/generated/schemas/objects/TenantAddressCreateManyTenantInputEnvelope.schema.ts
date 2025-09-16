import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressCreateManyTenantInputObjectSchema } from './TenantAddressCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TenantAddressCreateManyTenantInputObjectSchema), z.lazy(() => TenantAddressCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TenantAddressCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.TenantAddressCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressCreateManyTenantInputEnvelope>;
export const TenantAddressCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
