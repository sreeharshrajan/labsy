import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncLogCreateManyTenantInputObjectSchema } from './SyncLogCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SyncLogCreateManyTenantInputObjectSchema), z.lazy(() => SyncLogCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SyncLogCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.SyncLogCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogCreateManyTenantInputEnvelope>;
export const SyncLogCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
