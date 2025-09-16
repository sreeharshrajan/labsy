import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const servicescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ServiceScalarWhereInputObjectSchema), z.lazy(() => ServiceScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ServiceScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ServiceScalarWhereInputObjectSchema), z.lazy(() => ServiceScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  price: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  categoryId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const ServiceScalarWhereInputObjectSchema: z.ZodType<Prisma.ServiceScalarWhereInput> = servicescalarwhereinputSchema as unknown as z.ZodType<Prisma.ServiceScalarWhereInput>;
export const ServiceScalarWhereInputObjectZodSchema = servicescalarwhereinputSchema;
