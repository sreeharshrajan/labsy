import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { ServiceArgsObjectSchema } from './ServiceArgs.schema';
import { ReportDetailFindManySchema } from '../findManyReportDetail.schema';
import { ReportParameterFindManySchema } from '../findManyReportParameter.schema';
import { ReportTemplateCountOutputTypeArgsObjectSchema } from './ReportTemplateCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  unit: z.boolean().optional(),
  reference: z.boolean().optional(),
  notes: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  serviceId: z.boolean().optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  service: z.union([z.boolean(), z.lazy(() => ServiceArgsObjectSchema)]).optional(),
  ReportDetails: z.union([z.boolean(), z.lazy(() => ReportDetailFindManySchema)]).optional(),
  ReportParameter: z.union([z.boolean(), z.lazy(() => ReportParameterFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReportTemplateCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ReportTemplateSelectObjectSchema: z.ZodType<Prisma.ReportTemplateSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateSelect>;
export const ReportTemplateSelectObjectZodSchema = makeSchema();
