import { z } from 'zod';
import { ReportChangeLogSelectObjectSchema } from './objects/ReportChangeLogSelect.schema';
import { ReportChangeLogIncludeObjectSchema } from './objects/ReportChangeLogInclude.schema';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './objects/ReportChangeLogWhereUniqueInput.schema';

export const ReportChangeLogDeleteOneSchema = z.object({ select: ReportChangeLogSelectObjectSchema.optional(), include: ReportChangeLogIncludeObjectSchema.optional(), where: ReportChangeLogWhereUniqueInputObjectSchema  })