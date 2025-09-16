import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { PageCreateNestedOneWithoutPageContentsInputObjectSchema } from './PageCreateNestedOneWithoutPageContentsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  section: z.string(),
  content: z.union([JsonNullValueInputSchema, jsonSchema]),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  Page: z.lazy(() => PageCreateNestedOneWithoutPageContentsInputObjectSchema).optional()
}).strict();
export const PageContentCreateInputObjectSchema: z.ZodType<Prisma.PageContentCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PageContentCreateInput>;
export const PageContentCreateInputObjectZodSchema = makeSchema();
