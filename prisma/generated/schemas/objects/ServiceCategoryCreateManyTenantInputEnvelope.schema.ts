import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryCreateManyTenantInputObjectSchema } from './ServiceCategoryCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ServiceCategoryCreateManyTenantInputObjectSchema), z.lazy(() => ServiceCategoryCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ServiceCategoryCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.ServiceCategoryCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCreateManyTenantInputEnvelope>;
export const ServiceCategoryCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
