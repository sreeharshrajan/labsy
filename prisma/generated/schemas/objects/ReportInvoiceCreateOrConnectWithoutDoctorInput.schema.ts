import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceCreateWithoutDoctorInputObjectSchema } from './ReportInvoiceCreateWithoutDoctorInput.schema';
import { ReportInvoiceUncheckedCreateWithoutDoctorInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutDoctorInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const ReportInvoiceCreateOrConnectWithoutDoctorInputObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateOrConnectWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateOrConnectWithoutDoctorInput>;
export const ReportInvoiceCreateOrConnectWithoutDoctorInputObjectZodSchema = makeSchema();
