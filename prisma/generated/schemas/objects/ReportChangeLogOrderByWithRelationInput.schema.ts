import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { TenantUserOrderByWithRelationInputObjectSchema } from './TenantUserOrderByWithRelationInput.schema';
import { ReportOrderByWithRelationInputObjectSchema } from './ReportOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  reportId: SortOrderSchema.optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  changedById: SortOrderSchema.optional(),
  editVersion: SortOrderSchema.optional(),
  changes: SortOrderSchema.optional(),
  timestamp: SortOrderSchema.optional(),
  conflictResolved: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  User: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  changedBy: z.lazy(() => TenantUserOrderByWithRelationInputObjectSchema).optional(),
  report: z.lazy(() => ReportOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ReportChangeLogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReportChangeLogOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogOrderByWithRelationInput>;
export const ReportChangeLogOrderByWithRelationInputObjectZodSchema = makeSchema();
