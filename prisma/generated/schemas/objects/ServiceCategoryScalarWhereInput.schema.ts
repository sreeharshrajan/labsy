import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const servicecategoryscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ServiceCategoryScalarWhereInputObjectSchema), z.lazy(() => ServiceCategoryScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ServiceCategoryScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ServiceCategoryScalarWhereInputObjectSchema), z.lazy(() => ServiceCategoryScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const ServiceCategoryScalarWhereInputObjectSchema: z.ZodType<Prisma.ServiceCategoryScalarWhereInput> = servicecategoryscalarwhereinputSchema as unknown as z.ZodType<Prisma.ServiceCategoryScalarWhereInput>;
export const ServiceCategoryScalarWhereInputObjectZodSchema = servicecategoryscalarwhereinputSchema;
