import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogCreateWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogCreateWithoutInvoiceInput.schema';
import { DoctorCommissionLogUncheckedCreateWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogUncheckedCreateWithoutInvoiceInput.schema';
import { DoctorCommissionLogCreateOrConnectWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogCreateOrConnectWithoutInvoiceInput.schema';
import { DoctorCommissionLogCreateManyInvoiceInputEnvelopeObjectSchema } from './DoctorCommissionLogCreateManyInvoiceInputEnvelope.schema';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCommissionLogCreateWithoutInvoiceInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateWithoutInvoiceInputObjectSchema).array(), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutInvoiceInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutInvoiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorCommissionLogCreateOrConnectWithoutInvoiceInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateOrConnectWithoutInvoiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorCommissionLogCreateManyInvoiceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DoctorCommissionLogCreateNestedManyWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogCreateNestedManyWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogCreateNestedManyWithoutInvoiceInput>;
export const DoctorCommissionLogCreateNestedManyWithoutInvoiceInputObjectZodSchema = makeSchema();
