import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PostCreateManyUserInputObjectSchema } from './PostCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PostCreateManyUserInputObjectSchema), z.lazy(() => PostCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PostCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.PostCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateManyUserInputEnvelope>;
export const PostCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
