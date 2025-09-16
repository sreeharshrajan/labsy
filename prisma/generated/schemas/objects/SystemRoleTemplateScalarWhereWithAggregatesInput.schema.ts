import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumRoleWithAggregatesFilterObjectSchema } from './EnumRoleWithAggregatesFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const systemroletemplatescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SystemRoleTemplateScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SystemRoleTemplateScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SystemRoleTemplateScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SystemRoleTemplateScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SystemRoleTemplateScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumRoleWithAggregatesFilterObjectSchema), RoleSchema]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  isDefault: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const SystemRoleTemplateScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateScalarWhereWithAggregatesInput> = systemroletemplatescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SystemRoleTemplateScalarWhereWithAggregatesInput>;
export const SystemRoleTemplateScalarWhereWithAggregatesInputObjectZodSchema = systemroletemplatescalarwherewithaggregatesinputSchema;
