import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutCustomerInputObjectSchema } from './ReportUncheckedUpdateManyWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutCustomerInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutCustomerInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutCustomerInput>;
export const ReportUpdateManyWithWhereWithoutCustomerInputObjectZodSchema = makeSchema();
