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
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const PageContentUncheckedCreateWithoutPageInputObjectSchema: z.ZodType<Prisma.PageContentUncheckedCreateWithoutPageInput> = makeSchema() as unknown as z.ZodType<Prisma.PageContentUncheckedCreateWithoutPageInput>;
export const PageContentUncheckedCreateWithoutPageInputObjectZodSchema = makeSchema();
