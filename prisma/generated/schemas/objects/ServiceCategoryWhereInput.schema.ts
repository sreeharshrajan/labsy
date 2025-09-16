import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { ServiceListRelationFilterObjectSchema } from './ServiceListRelationFilter.schema'

const servicecategorywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ServiceCategoryWhereInputObjectSchema), z.lazy(() => ServiceCategoryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ServiceCategoryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ServiceCategoryWhereInputObjectSchema), z.lazy(() => ServiceCategoryWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional(),
  services: z.lazy(() => ServiceListRelationFilterObjectSchema).optional()
}).strict();
export const ServiceCategoryWhereInputObjectSchema: z.ZodType<Prisma.ServiceCategoryWhereInput> = servicecategorywhereinputSchema as unknown as z.ZodType<Prisma.ServiceCategoryWhereInput>;
export const ServiceCategoryWhereInputObjectZodSchema = servicecategorywhereinputSchema;
