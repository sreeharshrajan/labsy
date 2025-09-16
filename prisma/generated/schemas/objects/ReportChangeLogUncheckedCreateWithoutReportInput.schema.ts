import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ReportChangeLogActionSchema } from '../enums/ReportChangeLogAction.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional().nullable(),
  changedById: z.string(),
  editVersion: z.number().int(),
  changes: z.union([JsonNullValueInputSchema, jsonSchema]),
  timestamp: z.coerce.date().optional(),
  conflictResolved: z.boolean().optional(),
  action: ReportChangeLogActionSchema.optional()
}).strict();
export const ReportChangeLogUncheckedCreateWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportChangeLogUncheckedCreateWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogUncheckedCreateWithoutReportInput>;
export const ReportChangeLogUncheckedCreateWithoutReportInputObjectZodSchema = makeSchema();
