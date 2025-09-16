import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemRoleTemplateWhereInputObjectSchema } from './SystemRoleTemplateWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SystemRoleTemplateWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => SystemRoleTemplateWhereInputObjectSchema).optional()
}).strict();
export const SystemRoleTemplateScalarRelationFilterObjectSchema: z.ZodType<Prisma.SystemRoleTemplateScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateScalarRelationFilter>;
export const SystemRoleTemplateScalarRelationFilterObjectZodSchema = makeSchema();
