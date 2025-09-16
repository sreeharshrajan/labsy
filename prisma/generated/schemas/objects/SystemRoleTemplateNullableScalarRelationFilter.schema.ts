import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemRoleTemplateWhereInputObjectSchema } from './SystemRoleTemplateWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SystemRoleTemplateWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => SystemRoleTemplateWhereInputObjectSchema).optional().nullable()
}).strict();
export const SystemRoleTemplateNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.SystemRoleTemplateNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateNullableScalarRelationFilter>;
export const SystemRoleTemplateNullableScalarRelationFilterObjectZodSchema = makeSchema();
