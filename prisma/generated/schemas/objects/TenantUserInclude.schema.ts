import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleFindManySchema } from '../findManyTenantUserRole.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { ReportFindManySchema } from '../findManyReport.schema';
import { ReportChangeLogFindManySchema } from '../findManyReportChangeLog.schema';
import { TenantUserCountOutputTypeArgsObjectSchema } from './TenantUserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tenantRoles: z.union([z.boolean(), z.lazy(() => TenantUserRoleFindManySchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  Report: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  reportUpdates: z.union([z.boolean(), z.lazy(() => ReportChangeLogFindManySchema)]).optional(),
  collectedBy: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TenantUserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TenantUserIncludeObjectSchema: z.ZodType<Prisma.TenantUserInclude> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserInclude>;
export const TenantUserIncludeObjectZodSchema = makeSchema();
