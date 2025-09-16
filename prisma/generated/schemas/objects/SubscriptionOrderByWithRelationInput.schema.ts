import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  plan: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  startDate: SortOrderSchema.optional(),
  endDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  renewalDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  stripeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenantId: SortOrderSchema.optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const SubscriptionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SubscriptionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscriptionOrderByWithRelationInput>;
export const SubscriptionOrderByWithRelationInputObjectZodSchema = makeSchema();
