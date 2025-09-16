import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorUpdateWithoutReportInvoiceInputObjectSchema } from './DoctorUpdateWithoutReportInvoiceInput.schema';
import { DoctorUncheckedUpdateWithoutReportInvoiceInputObjectSchema } from './DoctorUncheckedUpdateWithoutReportInvoiceInput.schema';
import { DoctorCreateWithoutReportInvoiceInputObjectSchema } from './DoctorCreateWithoutReportInvoiceInput.schema';
import { DoctorUncheckedCreateWithoutReportInvoiceInputObjectSchema } from './DoctorUncheckedCreateWithoutReportInvoiceInput.schema';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DoctorUpdateWithoutReportInvoiceInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutReportInvoiceInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCreateWithoutReportInvoiceInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutReportInvoiceInputObjectSchema)]),
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional()
}).strict();
export const DoctorUpsertWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.DoctorUpsertWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpsertWithoutReportInvoiceInput>;
export const DoctorUpsertWithoutReportInvoiceInputObjectZodSchema = makeSchema();
