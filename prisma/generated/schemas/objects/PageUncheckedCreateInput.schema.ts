import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { PageContentUncheckedCreateNestedManyWithoutPageInputObjectSchema } from './PageContentUncheckedCreateNestedManyWithoutPageInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  content: z.union([JsonNullValueInputSchema, jsonSchema]),
  isActive: z.boolean().optional(),
  metaData: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  pageContents: z.lazy(() => PageContentUncheckedCreateNestedManyWithoutPageInputObjectSchema)
}).strict();
export const PageUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PageUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PageUncheckedCreateInput>;
export const PageUncheckedCreateInputObjectZodSchema = makeSchema();
