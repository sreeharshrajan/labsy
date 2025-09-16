import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { TenantUserArgsObjectSchema } from './TenantUserArgs.schema';
import { ReportArgsObjectSchema } from './ReportArgs.schema'

const makeSchema = () => z.object({
  User: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  changedBy: z.union([z.boolean(), z.lazy(() => TenantUserArgsObjectSchema)]).optional(),
  report: z.union([z.boolean(), z.lazy(() => ReportArgsObjectSchema)]).optional()
}).strict();
export const ReportChangeLogIncludeObjectSchema: z.ZodType<Prisma.ReportChangeLogInclude> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogInclude>;
export const ReportChangeLogIncludeObjectZodSchema = makeSchema();
