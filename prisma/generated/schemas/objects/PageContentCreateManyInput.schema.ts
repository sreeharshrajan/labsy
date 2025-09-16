import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  section: z.string(),
  content: z.union([JsonNullValueInputSchema, jsonSchema]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  pageId: z.string().optional().nullable()
}).strict();
export const PageContentCreateManyInputObjectSchema: z.ZodType<Prisma.PageContentCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.PageContentCreateManyInput>;
export const PageContentCreateManyInputObjectZodSchema = makeSchema();
