import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateWithoutCategoryInputObjectSchema } from './ServiceCreateWithoutCategoryInput.schema';
import { ServiceUncheckedCreateWithoutCategoryInputObjectSchema } from './ServiceUncheckedCreateWithoutCategoryInput.schema';
import { ServiceCreateOrConnectWithoutCategoryInputObjectSchema } from './ServiceCreateOrConnectWithoutCategoryInput.schema';
import { ServiceCreateManyCategoryInputEnvelopeObjectSchema } from './ServiceCreateManyCategoryInputEnvelope.schema';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServiceCreateWithoutCategoryInputObjectSchema), z.lazy(() => ServiceCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => ServiceUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ServiceCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => ServiceCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ServiceCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ServiceWhereUniqueInputObjectSchema), z.lazy(() => ServiceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ServiceUncheckedCreateNestedManyWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ServiceUncheckedCreateNestedManyWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUncheckedCreateNestedManyWithoutCategoryInput>;
export const ServiceUncheckedCreateNestedManyWithoutCategoryInputObjectZodSchema = makeSchema();
