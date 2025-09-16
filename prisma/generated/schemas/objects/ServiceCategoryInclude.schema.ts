import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { ServiceFindManySchema } from '../findManyService.schema';
import { ServiceCategoryCountOutputTypeArgsObjectSchema } from './ServiceCategoryCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  services: z.union([z.boolean(), z.lazy(() => ServiceFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ServiceCategoryCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ServiceCategoryIncludeObjectSchema: z.ZodType<Prisma.ServiceCategoryInclude> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryInclude>;
export const ServiceCategoryIncludeObjectZodSchema = makeSchema();
