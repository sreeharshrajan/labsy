import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentFindManySchema } from '../findManyPageContent.schema';
import { PageCountOutputTypeArgsObjectSchema } from './PageCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  pageContents: z.union([z.boolean(), z.lazy(() => PageContentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PageCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PageIncludeObjectSchema: z.ZodType<Prisma.PageInclude> = makeSchema() as unknown as z.ZodType<Prisma.PageInclude>;
export const PageIncludeObjectZodSchema = makeSchema();
