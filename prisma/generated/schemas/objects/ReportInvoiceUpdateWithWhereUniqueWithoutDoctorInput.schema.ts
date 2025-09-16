import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceUpdateWithoutDoctorInputObjectSchema } from './ReportInvoiceUpdateWithoutDoctorInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutDoctorInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportInvoiceUpdateWithoutDoctorInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutDoctorInputObjectSchema)])
}).strict();
export const ReportInvoiceUpdateWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateWithWhereUniqueWithoutDoctorInput>;
export const ReportInvoiceUpdateWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
