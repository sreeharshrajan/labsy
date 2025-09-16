import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressCreateManyAddressInputObjectSchema } from './TenantAddressCreateManyAddressInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TenantAddressCreateManyAddressInputObjectSchema), z.lazy(() => TenantAddressCreateManyAddressInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TenantAddressCreateManyAddressInputEnvelopeObjectSchema: z.ZodType<Prisma.TenantAddressCreateManyAddressInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressCreateManyAddressInputEnvelope>;
export const TenantAddressCreateManyAddressInputEnvelopeObjectZodSchema = makeSchema();
