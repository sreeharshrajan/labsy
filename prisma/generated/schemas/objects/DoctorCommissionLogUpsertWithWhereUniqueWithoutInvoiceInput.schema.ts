import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogUpdateWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogUpdateWithoutInvoiceInput.schema';
import { DoctorCommissionLogUncheckedUpdateWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogUncheckedUpdateWithoutInvoiceInput.schema';
import { DoctorCommissionLogCreateWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogCreateWithoutInvoiceInput.schema';
import { DoctorCommissionLogUncheckedCreateWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogUncheckedCreateWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DoctorCommissionLogUpdateWithoutInvoiceInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedUpdateWithoutInvoiceInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCommissionLogCreateWithoutInvoiceInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutInvoiceInputObjectSchema)])
}).strict();
export const DoctorCommissionLogUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUpsertWithWhereUniqueWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUpsertWithWhereUniqueWithoutInvoiceInput>;
export const DoctorCommissionLogUpsertWithWhereUniqueWithoutInvoiceInputObjectZodSchema = makeSchema();
