import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutUserInputObjectSchema } from './PostUpdateWithoutUserInput.schema';
import { PostUncheckedUpdateWithoutUserInputObjectSchema } from './PostUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateWithoutUserInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const PostUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutUserInput>;
export const PostUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
