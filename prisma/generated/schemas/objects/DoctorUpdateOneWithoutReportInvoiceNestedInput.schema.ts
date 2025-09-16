import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateWithoutReportInvoiceInputObjectSchema } from './DoctorCreateWithoutReportInvoiceInput.schema';
import { DoctorUncheckedCreateWithoutReportInvoiceInputObjectSchema } from './DoctorUncheckedCreateWithoutReportInvoiceInput.schema';
import { DoctorCreateOrConnectWithoutReportInvoiceInputObjectSchema } from './DoctorCreateOrConnectWithoutReportInvoiceInput.schema';
import { DoctorUpsertWithoutReportInvoiceInputObjectSchema } from './DoctorUpsertWithoutReportInvoiceInput.schema';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateToOneWithWhereWithoutReportInvoiceInputObjectSchema } from './DoctorUpdateToOneWithWhereWithoutReportInvoiceInput.schema';
import { DoctorUpdateWithoutReportInvoiceInputObjectSchema } from './DoctorUpdateWithoutReportInvoiceInput.schema';
import { DoctorUncheckedUpdateWithoutReportInvoiceInputObjectSchema } from './DoctorUncheckedUpdateWithoutReportInvoiceInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutReportInvoiceInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutReportInvoiceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutReportInvoiceInputObjectSchema).optional(),
  upsert: z.lazy(() => DoctorUpsertWithoutReportInvoiceInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => DoctorWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => DoctorWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DoctorUpdateToOneWithWhereWithoutReportInvoiceInputObjectSchema), z.lazy(() => DoctorUpdateWithoutReportInvoiceInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutReportInvoiceInputObjectSchema)]).optional()
}).strict();
export const DoctorUpdateOneWithoutReportInvoiceNestedInputObjectSchema: z.ZodType<Prisma.DoctorUpdateOneWithoutReportInvoiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateOneWithoutReportInvoiceNestedInput>;
export const DoctorUpdateOneWithoutReportInvoiceNestedInputObjectZodSchema = makeSchema();
