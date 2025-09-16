import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { ServiceOrderByRelationAggregateInputObjectSchema } from './ServiceOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
  services: z.lazy(() => ServiceOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ServiceCategoryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ServiceCategoryOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryOrderByWithRelationInput>;
export const ServiceCategoryOrderByWithRelationInputObjectZodSchema = makeSchema();
