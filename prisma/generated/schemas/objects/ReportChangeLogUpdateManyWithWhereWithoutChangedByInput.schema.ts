import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogScalarWhereInputObjectSchema } from './ReportChangeLogScalarWhereInput.schema';
import { ReportChangeLogUpdateManyMutationInputObjectSchema } from './ReportChangeLogUpdateManyMutationInput.schema';
import { ReportChangeLogUncheckedUpdateManyWithoutChangedByInputObjectSchema } from './ReportChangeLogUncheckedUpdateManyWithoutChangedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportChangeLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportChangeLogUpdateManyMutationInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedUpdateManyWithoutChangedByInputObjectSchema)])
}).strict();
export const ReportChangeLogUpdateManyWithWhereWithoutChangedByInputObjectSchema: z.ZodType<Prisma.ReportChangeLogUpdateManyWithWhereWithoutChangedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogUpdateManyWithWhereWithoutChangedByInput>;
export const ReportChangeLogUpdateManyWithWhereWithoutChangedByInputObjectZodSchema = makeSchema();
