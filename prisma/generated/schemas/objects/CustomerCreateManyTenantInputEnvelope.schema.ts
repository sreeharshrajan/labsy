import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateManyTenantInputObjectSchema } from './CustomerCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CustomerCreateManyTenantInputObjectSchema), z.lazy(() => CustomerCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CustomerCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.CustomerCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateManyTenantInputEnvelope>;
export const CustomerCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
