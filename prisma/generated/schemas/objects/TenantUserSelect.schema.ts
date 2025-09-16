import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleFindManySchema } from '../findManyTenantUserRole.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { ReportFindManySchema } from '../findManyReport.schema';
import { ReportChangeLogFindManySchema } from '../findManyReportChangeLog.schema';
import { TenantUserCountOutputTypeArgsObjectSchema } from './TenantUserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  tenantRoles: z.union([z.boolean(), z.lazy(() => TenantUserRoleFindManySchema)]).optional(),
  userId: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  Report: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  reportUpdates: z.union([z.boolean(), z.lazy(() => ReportChangeLogFindManySchema)]).optional(),
  collectedBy: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TenantUserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TenantUserSelectObjectSchema: z.ZodType<Prisma.TenantUserSelect> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserSelect>;
export const TenantUserSelectObjectZodSchema = makeSchema();
