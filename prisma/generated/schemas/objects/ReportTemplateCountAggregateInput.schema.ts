import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  unit: z.literal(true).optional(),
  reference: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  serviceId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ReportTemplateCountAggregateInputObjectSchema: z.ZodType<Prisma.ReportTemplateCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateCountAggregateInputType>;
export const ReportTemplateCountAggregateInputObjectZodSchema = makeSchema();
