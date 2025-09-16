import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateWithoutItemsInputObjectSchema } from './ReportInvoiceCreateWithoutItemsInput.schema';
import { ReportInvoiceUncheckedCreateWithoutItemsInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutItemsInput.schema';
import { ReportInvoiceCreateOrConnectWithoutItemsInputObjectSchema } from './ReportInvoiceCreateOrConnectWithoutItemsInput.schema';
import { ReportInvoiceUpsertWithoutItemsInputObjectSchema } from './ReportInvoiceUpsertWithoutItemsInput.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceUpdateToOneWithWhereWithoutItemsInputObjectSchema } from './ReportInvoiceUpdateToOneWithWhereWithoutItemsInput.schema';
import { ReportInvoiceUpdateWithoutItemsInputObjectSchema } from './ReportInvoiceUpdateWithoutItemsInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutItemsInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutItemsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportInvoiceCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportInvoiceUpsertWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportInvoiceUpdateToOneWithWhereWithoutItemsInputObjectSchema), z.lazy(() => ReportInvoiceUpdateWithoutItemsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutItemsInputObjectSchema)]).optional()
}).strict();
export const ReportInvoiceUpdateOneRequiredWithoutItemsNestedInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateOneRequiredWithoutItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateOneRequiredWithoutItemsNestedInput>;
export const ReportInvoiceUpdateOneRequiredWithoutItemsNestedInputObjectZodSchema = makeSchema();
