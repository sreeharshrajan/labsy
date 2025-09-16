import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutCustomerInputObjectSchema } from './ReportCreateWithoutCustomerInput.schema';
import { ReportUncheckedCreateWithoutCustomerInputObjectSchema } from './ReportUncheckedCreateWithoutCustomerInput.schema';
import { ReportCreateOrConnectWithoutCustomerInputObjectSchema } from './ReportCreateOrConnectWithoutCustomerInput.schema';
import { ReportCreateManyCustomerInputEnvelopeObjectSchema } from './ReportCreateManyCustomerInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCustomerInputObjectSchema), z.lazy(() => ReportCreateWithoutCustomerInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCustomerInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCustomerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCustomerInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCustomerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCustomerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportCreateNestedManyWithoutCustomerInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedManyWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateNestedManyWithoutCustomerInput>;
export const ReportCreateNestedManyWithoutCustomerInputObjectZodSchema = makeSchema();
