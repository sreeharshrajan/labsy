import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SystemRoleTemplateOrderByWithRelationInputObjectSchema } from './SystemRoleTemplateOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  resource: SortOrderSchema.optional(),
  conditions: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  roleTemplateId: SortOrderSchema.optional(),
  roleTemplate: z.lazy(() => SystemRoleTemplateOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const SystemPermissionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SystemPermissionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionOrderByWithRelationInput>;
export const SystemPermissionOrderByWithRelationInputObjectZodSchema = makeSchema();
