import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  addressId: z.literal(true).optional(),
  isPrimary: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TenantAddressCountAggregateInputObjectSchema: z.ZodType<Prisma.TenantAddressCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressCountAggregateInputType>;
export const TenantAddressCountAggregateInputObjectZodSchema = makeSchema();
