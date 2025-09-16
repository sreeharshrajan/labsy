import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TenantAddressOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TenantAddressOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressOrderByRelationAggregateInput>;
export const TenantAddressOrderByRelationAggregateInputObjectZodSchema = makeSchema();
