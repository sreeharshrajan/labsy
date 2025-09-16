import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  unit: z.string().optional().nullable(),
  reference: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantId: z.string(),
  serviceId: z.string()
}).strict();
export const ReportTemplateCreateManyInputObjectSchema: z.ZodType<Prisma.ReportTemplateCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateCreateManyInput>;
export const ReportTemplateCreateManyInputObjectZodSchema = makeSchema();
