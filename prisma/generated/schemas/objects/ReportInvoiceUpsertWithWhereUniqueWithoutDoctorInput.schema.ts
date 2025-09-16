import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceUpdateWithoutDoctorInputObjectSchema } from './ReportInvoiceUpdateWithoutDoctorInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutDoctorInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutDoctorInput.schema';
import { ReportInvoiceCreateWithoutDoctorInputObjectSchema } from './ReportInvoiceCreateWithoutDoctorInput.schema';
import { ReportInvoiceUncheckedCreateWithoutDoctorInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportInvoiceUpdateWithoutDoctorInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutDoctorInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutDoctorInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const ReportInvoiceUpsertWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpsertWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpsertWithWhereUniqueWithoutDoctorInput>;
export const ReportInvoiceUpsertWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
