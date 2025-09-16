import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { ServiceFindManySchema } from '../findManyService.schema';
import { ServiceCategoryCountOutputTypeArgsObjectSchema } from './ServiceCategoryCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  services: z.union([z.boolean(), z.lazy(() => ServiceFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ServiceCategoryCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ServiceCategorySelectObjectSchema: z.ZodType<Prisma.ServiceCategorySelect> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategorySelect>;
export const ServiceCategorySelectObjectZodSchema = makeSchema();
