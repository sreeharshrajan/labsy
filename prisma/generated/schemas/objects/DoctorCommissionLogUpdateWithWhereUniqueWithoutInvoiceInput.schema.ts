import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogUpdateWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogUpdateWithoutInvoiceInput.schema';
import { DoctorCommissionLogUncheckedUpdateWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogUncheckedUpdateWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DoctorCommissionLogUpdateWithoutInvoiceInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedUpdateWithoutInvoiceInputObjectSchema)])
}).strict();
export const DoctorCommissionLogUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUpdateWithWhereUniqueWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUpdateWithWhereUniqueWithoutInvoiceInput>;
export const DoctorCommissionLogUpdateWithWhereUniqueWithoutInvoiceInputObjectZodSchema = makeSchema();
