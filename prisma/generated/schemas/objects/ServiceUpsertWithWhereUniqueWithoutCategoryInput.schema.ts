import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceUpdateWithoutCategoryInputObjectSchema } from './ServiceUpdateWithoutCategoryInput.schema';
import { ServiceUncheckedUpdateWithoutCategoryInputObjectSchema } from './ServiceUncheckedUpdateWithoutCategoryInput.schema';
import { ServiceCreateWithoutCategoryInputObjectSchema } from './ServiceCreateWithoutCategoryInput.schema';
import { ServiceUncheckedCreateWithoutCategoryInputObjectSchema } from './ServiceUncheckedCreateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ServiceUpdateWithoutCategoryInputObjectSchema), z.lazy(() => ServiceUncheckedUpdateWithoutCategoryInputObjectSchema)]),
  create: z.union([z.lazy(() => ServiceCreateWithoutCategoryInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
export const ServiceUpsertWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ServiceUpsertWithWhereUniqueWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpsertWithWhereUniqueWithoutCategoryInput>;
export const ServiceUpsertWithWhereUniqueWithoutCategoryInputObjectZodSchema = makeSchema();
