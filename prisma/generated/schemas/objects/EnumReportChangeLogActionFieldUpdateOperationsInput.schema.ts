import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogActionSchema } from '../enums/ReportChangeLogAction.schema'

const makeSchema = () => z.object({
  set: ReportChangeLogActionSchema.optional()
}).strict();
export const EnumReportChangeLogActionFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumReportChangeLogActionFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumReportChangeLogActionFieldUpdateOperationsInput>;
export const EnumReportChangeLogActionFieldUpdateOperationsInputObjectZodSchema = makeSchema();
