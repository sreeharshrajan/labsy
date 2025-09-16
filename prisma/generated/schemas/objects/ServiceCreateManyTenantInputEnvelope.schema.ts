import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateManyTenantInputObjectSchema } from './ServiceCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ServiceCreateManyTenantInputObjectSchema), z.lazy(() => ServiceCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ServiceCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.ServiceCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateManyTenantInputEnvelope>;
export const ServiceCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
