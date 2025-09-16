import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { DoctorUpdateWithoutReportInvoiceInputObjectSchema } from './DoctorUpdateWithoutReportInvoiceInput.schema';
import { DoctorUncheckedUpdateWithoutReportInvoiceInputObjectSchema } from './DoctorUncheckedUpdateWithoutReportInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DoctorUpdateWithoutReportInvoiceInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutReportInvoiceInputObjectSchema)])
}).strict();
export const DoctorUpdateToOneWithWhereWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutReportInvoiceInput>;
export const DoctorUpdateToOneWithWhereWithoutReportInvoiceInputObjectZodSchema = makeSchema();
