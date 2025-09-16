import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutInvoiceInputObjectSchema } from './ReportUncheckedUpdateManyWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutInvoiceInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutInvoiceInput>;
export const ReportUpdateManyWithWhereWithoutInvoiceInputObjectZodSchema = makeSchema();
