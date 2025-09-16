import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateWithoutReportInvoiceInputObjectSchema } from './DoctorCreateWithoutReportInvoiceInput.schema';
import { DoctorUncheckedCreateWithoutReportInvoiceInputObjectSchema } from './DoctorUncheckedCreateWithoutReportInvoiceInput.schema';
import { DoctorCreateOrConnectWithoutReportInvoiceInputObjectSchema } from './DoctorCreateOrConnectWithoutReportInvoiceInput.schema';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutReportInvoiceInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutReportInvoiceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutReportInvoiceInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional()
}).strict();
export const DoctorCreateNestedOneWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateNestedOneWithoutReportInvoiceInput>;
export const DoctorCreateNestedOneWithoutReportInvoiceInputObjectZodSchema = makeSchema();
