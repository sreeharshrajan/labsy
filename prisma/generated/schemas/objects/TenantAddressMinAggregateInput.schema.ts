import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  addressId: z.literal(true).optional(),
  isPrimary: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const TenantAddressMinAggregateInputObjectSchema: z.ZodType<Prisma.TenantAddressMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressMinAggregateInputType>;
export const TenantAddressMinAggregateInputObjectZodSchema = makeSchema();
