import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateWithoutDoctorInputObjectSchema } from './ReportInvoiceCreateWithoutDoctorInput.schema';
import { ReportInvoiceUncheckedCreateWithoutDoctorInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutDoctorInput.schema';
import { ReportInvoiceCreateOrConnectWithoutDoctorInputObjectSchema } from './ReportInvoiceCreateOrConnectWithoutDoctorInput.schema';
import { ReportInvoiceCreateManyDoctorInputEnvelopeObjectSchema } from './ReportInvoiceCreateManyDoctorInputEnvelope.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutDoctorInputObjectSchema), z.lazy(() => ReportInvoiceCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => ReportInvoiceUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportInvoiceCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => ReportInvoiceCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportInvoiceCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportInvoiceUncheckedCreateNestedManyWithoutDoctorInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUncheckedCreateNestedManyWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUncheckedCreateNestedManyWithoutDoctorInput>;
export const ReportInvoiceUncheckedCreateNestedManyWithoutDoctorInputObjectZodSchema = makeSchema();
