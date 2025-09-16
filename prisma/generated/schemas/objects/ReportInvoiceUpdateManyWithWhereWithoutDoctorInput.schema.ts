import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceScalarWhereInputObjectSchema } from './ReportInvoiceScalarWhereInput.schema';
import { ReportInvoiceUpdateManyMutationInputObjectSchema } from './ReportInvoiceUpdateManyMutationInput.schema';
import { ReportInvoiceUncheckedUpdateManyWithoutDoctorInputObjectSchema } from './ReportInvoiceUncheckedUpdateManyWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportInvoiceUpdateManyMutationInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateManyWithoutDoctorInputObjectSchema)])
}).strict();
export const ReportInvoiceUpdateManyWithWhereWithoutDoctorInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateManyWithWhereWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateManyWithWhereWithoutDoctorInput>;
export const ReportInvoiceUpdateManyWithWhereWithoutDoctorInputObjectZodSchema = makeSchema();
