import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  addressId: z.literal(true).optional(),
  isPrimary: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const TenantAddressMaxAggregateInputObjectSchema: z.ZodType<Prisma.TenantAddressMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressMaxAggregateInputType>;
export const TenantAddressMaxAggregateInputObjectZodSchema = makeSchema();
