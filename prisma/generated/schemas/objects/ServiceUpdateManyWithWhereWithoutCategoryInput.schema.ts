import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceScalarWhereInputObjectSchema } from './ServiceScalarWhereInput.schema';
import { ServiceUpdateManyMutationInputObjectSchema } from './ServiceUpdateManyMutationInput.schema';
import { ServiceUncheckedUpdateManyWithoutCategoryInputObjectSchema } from './ServiceUncheckedUpdateManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ServiceUpdateManyMutationInputObjectSchema), z.lazy(() => ServiceUncheckedUpdateManyWithoutCategoryInputObjectSchema)])
}).strict();
export const ServiceUpdateManyWithWhereWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ServiceUpdateManyWithWhereWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateManyWithWhereWithoutCategoryInput>;
export const ServiceUpdateManyWithWhereWithoutCategoryInputObjectZodSchema = makeSchema();
