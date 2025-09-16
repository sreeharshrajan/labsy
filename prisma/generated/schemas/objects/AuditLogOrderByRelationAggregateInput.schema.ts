import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AuditLogOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AuditLogOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogOrderByRelationAggregateInput>;
export const AuditLogOrderByRelationAggregateInputObjectZodSchema = makeSchema();
