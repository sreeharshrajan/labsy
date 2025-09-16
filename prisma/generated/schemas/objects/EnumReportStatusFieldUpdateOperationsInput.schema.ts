import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportStatusSchema } from '../enums/ReportStatus.schema'

const makeSchema = () => z.object({
  set: ReportStatusSchema.optional()
}).strict();
export const EnumReportStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumReportStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumReportStatusFieldUpdateOperationsInput>;
export const EnumReportStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
