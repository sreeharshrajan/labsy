import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateWithoutItemsInputObjectSchema } from './ReportInvoiceCreateWithoutItemsInput.schema';
import { ReportInvoiceUncheckedCreateWithoutItemsInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutItemsInput.schema';
import { ReportInvoiceCreateOrConnectWithoutItemsInputObjectSchema } from './ReportInvoiceCreateOrConnectWithoutItemsInput.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutItemsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportInvoiceCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReportInvoiceCreateNestedOneWithoutItemsInputObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateNestedOneWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateNestedOneWithoutItemsInput>;
export const ReportInvoiceCreateNestedOneWithoutItemsInputObjectZodSchema = makeSchema();
