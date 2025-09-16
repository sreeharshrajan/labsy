import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutCustomerAddressInputObjectSchema } from './ReportUncheckedUpdateManyWithoutCustomerAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutCustomerAddressInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutCustomerAddressInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutCustomerAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutCustomerAddressInput>;
export const ReportUpdateManyWithWhereWithoutCustomerAddressInputObjectZodSchema = makeSchema();
