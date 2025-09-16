import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateManyUserInputObjectSchema } from './TenantUserCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TenantUserCreateManyUserInputObjectSchema), z.lazy(() => TenantUserCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TenantUserCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.TenantUserCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateManyUserInputEnvelope>;
export const TenantUserCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
