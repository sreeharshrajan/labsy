import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  slug: z.string(),
  metaData: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  content: z.union([JsonNullValueInputSchema, jsonSchema]),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const PostCreateManyUserInputObjectSchema: z.ZodType<Prisma.PostCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateManyUserInput>;
export const PostCreateManyUserInputObjectZodSchema = makeSchema();
