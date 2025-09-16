import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PostCreateWithoutUserInputObjectSchema } from './PostCreateWithoutUserInput.schema';
import { PostUncheckedCreateWithoutUserInputObjectSchema } from './PostUncheckedCreateWithoutUserInput.schema';
import { PostCreateOrConnectWithoutUserInputObjectSchema } from './PostCreateOrConnectWithoutUserInput.schema';
import { PostCreateManyUserInputEnvelopeObjectSchema } from './PostCreateManyUserInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutUserInputObjectSchema), z.lazy(() => PostCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PostUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => PostCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PostCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PostCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.PostCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateNestedManyWithoutUserInput>;
export const PostCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
