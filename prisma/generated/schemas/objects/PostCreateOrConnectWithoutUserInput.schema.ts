import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutUserInputObjectSchema } from './PostCreateWithoutUserInput.schema';
import { PostUncheckedCreateWithoutUserInputObjectSchema } from './PostUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PostCreateWithoutUserInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const PostCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateOrConnectWithoutUserInput>;
export const PostCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
