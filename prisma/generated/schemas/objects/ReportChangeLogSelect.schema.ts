import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { TenantUserArgsObjectSchema } from './TenantUserArgs.schema';
import { ReportArgsObjectSchema } from './ReportArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  reportId: z.boolean().optional(),
  userId: z.boolean().optional(),
  changedById: z.boolean().optional(),
  editVersion: z.boolean().optional(),
  changes: z.boolean().optional(),
  timestamp: z.boolean().optional(),
  conflictResolved: z.boolean().optional(),
  action: z.boolean().optional(),
  User: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  changedBy: z.union([z.boolean(), z.lazy(() => TenantUserArgsObjectSchema)]).optional(),
  report: z.union([z.boolean(), z.lazy(() => ReportArgsObjectSchema)]).optional()
}).strict();
export const ReportChangeLogSelectObjectSchema: z.ZodType<Prisma.ReportChangeLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogSelect>;
export const ReportChangeLogSelectObjectZodSchema = makeSchema();
