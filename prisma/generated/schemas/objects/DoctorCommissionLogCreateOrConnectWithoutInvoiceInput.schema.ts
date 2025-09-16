import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogCreateWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogCreateWithoutInvoiceInput.schema';
import { DoctorCommissionLogUncheckedCreateWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogUncheckedCreateWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCommissionLogCreateWithoutInvoiceInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutInvoiceInputObjectSchema)])
}).strict();
export const DoctorCommissionLogCreateOrConnectWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogCreateOrConnectWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogCreateOrConnectWithoutInvoiceInput>;
export const DoctorCommissionLogCreateOrConnectWithoutInvoiceInputObjectZodSchema = makeSchema();
