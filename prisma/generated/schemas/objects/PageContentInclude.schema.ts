import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageArgsObjectSchema } from './PageArgs.schema'

const makeSchema = () => z.object({
  Page: z.union([z.boolean(), z.lazy(() => PageArgsObjectSchema)]).optional()
}).strict();
export const PageContentIncludeObjectSchema: z.ZodType<Prisma.PageContentInclude> = makeSchema() as unknown as z.ZodType<Prisma.PageContentInclude>;
export const PageContentIncludeObjectZodSchema = makeSchema();
