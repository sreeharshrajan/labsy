import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorCreateWithoutReportInvoiceInputObjectSchema } from './DoctorCreateWithoutReportInvoiceInput.schema';
import { DoctorUncheckedCreateWithoutReportInvoiceInputObjectSchema } from './DoctorUncheckedCreateWithoutReportInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCreateWithoutReportInvoiceInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutReportInvoiceInputObjectSchema)])
}).strict();
export const DoctorCreateOrConnectWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateOrConnectWithoutReportInvoiceInput>;
export const DoctorCreateOrConnectWithoutReportInvoiceInputObjectZodSchema = makeSchema();
