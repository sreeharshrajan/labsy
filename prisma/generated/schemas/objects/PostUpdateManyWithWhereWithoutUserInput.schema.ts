import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema';
import { PostUpdateManyMutationInputObjectSchema } from './PostUpdateManyMutationInput.schema';
import { PostUncheckedUpdateManyWithoutUserInputObjectSchema } from './PostUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateManyMutationInputObjectSchema), z.lazy(() => PostUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const PostUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateManyWithWhereWithoutUserInput>;
export const PostUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
