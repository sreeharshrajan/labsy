import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ReportChangeLogActionSchema } from '../enums/ReportChangeLogAction.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  reportId: z.string(),
  userId: z.string().optional().nullable(),
  editVersion: z.number().int(),
  changes: z.union([JsonNullValueInputSchema, jsonSchema]),
  timestamp: z.coerce.date().optional(),
  conflictResolved: z.boolean().optional(),
  action: ReportChangeLogActionSchema.optional()
}).strict();
export const ReportChangeLogUncheckedCreateWithoutChangedByInputObjectSchema: z.ZodType<Prisma.ReportChangeLogUncheckedCreateWithoutChangedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogUncheckedCreateWithoutChangedByInput>;
export const ReportChangeLogUncheckedCreateWithoutChangedByInputObjectZodSchema = makeSchema();
