import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ReportChangeLogActionSchema } from '../enums/ReportChangeLogAction.schema';
import { UserCreateNestedOneWithoutReportChangeLogInputObjectSchema } from './UserCreateNestedOneWithoutReportChangeLogInput.schema';
import { TenantUserCreateNestedOneWithoutReportUpdatesInputObjectSchema } from './TenantUserCreateNestedOneWithoutReportUpdatesInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  editVersion: z.number().int(),
  changes: z.union([JsonNullValueInputSchema, jsonSchema]),
  timestamp: z.coerce.date().optional(),
  conflictResolved: z.boolean().optional(),
  action: ReportChangeLogActionSchema.optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutReportChangeLogInputObjectSchema).optional(),
  changedBy: z.lazy(() => TenantUserCreateNestedOneWithoutReportUpdatesInputObjectSchema)
}).strict();
export const ReportChangeLogCreateWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportChangeLogCreateWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogCreateWithoutReportInput>;
export const ReportChangeLogCreateWithoutReportInputObjectZodSchema = makeSchema();
