import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentFindManySchema } from '../findManyPageContent.schema';
import { PageCountOutputTypeArgsObjectSchema } from './PageCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  content: z.boolean().optional(),
  isActive: z.boolean().optional(),
  metaData: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  pageContents: z.union([z.boolean(), z.lazy(() => PageContentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PageCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PageSelectObjectSchema: z.ZodType<Prisma.PageSelect> = makeSchema() as unknown as z.ZodType<Prisma.PageSelect>;
export const PageSelectObjectZodSchema = makeSchema();
