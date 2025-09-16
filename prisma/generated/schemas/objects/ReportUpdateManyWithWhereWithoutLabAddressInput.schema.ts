import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutLabAddressInputObjectSchema } from './ReportUncheckedUpdateManyWithoutLabAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutLabAddressInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutLabAddressInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutLabAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutLabAddressInput>;
export const ReportUpdateManyWithWhereWithoutLabAddressInputObjectZodSchema = makeSchema();
