import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateWithoutCategoryInputObjectSchema } from './ServiceCreateWithoutCategoryInput.schema';
import { ServiceUncheckedCreateWithoutCategoryInputObjectSchema } from './ServiceUncheckedCreateWithoutCategoryInput.schema';
import { ServiceCreateOrConnectWithoutCategoryInputObjectSchema } from './ServiceCreateOrConnectWithoutCategoryInput.schema';
import { ServiceUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './ServiceUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { ServiceCreateManyCategoryInputEnvelopeObjectSchema } from './ServiceCreateManyCategoryInputEnvelope.schema';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './ServiceUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { ServiceUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './ServiceUpdateManyWithWhereWithoutCategoryInput.schema';
import { ServiceScalarWhereInputObjectSchema } from './ServiceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServiceCreateWithoutCategoryInputObjectSchema), z.lazy(() => ServiceCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => ServiceUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ServiceCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => ServiceCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ServiceUpsertWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => ServiceUpsertWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ServiceCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ServiceWhereUniqueInputObjectSchema), z.lazy(() => ServiceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ServiceWhereUniqueInputObjectSchema), z.lazy(() => ServiceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ServiceWhereUniqueInputObjectSchema), z.lazy(() => ServiceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ServiceWhereUniqueInputObjectSchema), z.lazy(() => ServiceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ServiceUpdateWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => ServiceUpdateWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ServiceUpdateManyWithWhereWithoutCategoryInputObjectSchema), z.lazy(() => ServiceUpdateManyWithWhereWithoutCategoryInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ServiceScalarWhereInputObjectSchema), z.lazy(() => ServiceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ServiceUpdateManyWithoutCategoryNestedInputObjectSchema: z.ZodType<Prisma.ServiceUpdateManyWithoutCategoryNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateManyWithoutCategoryNestedInput>;
export const ServiceUpdateManyWithoutCategoryNestedInputObjectZodSchema = makeSchema();
