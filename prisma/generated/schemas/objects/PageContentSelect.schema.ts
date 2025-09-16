import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageArgsObjectSchema } from './PageArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  section: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  Page: z.union([z.boolean(), z.lazy(() => PageArgsObjectSchema)]).optional(),
  pageId: z.boolean().optional()
}).strict();
export const PageContentSelectObjectSchema: z.ZodType<Prisma.PageContentSelect> = makeSchema() as unknown as z.ZodType<Prisma.PageContentSelect>;
export const PageContentSelectObjectZodSchema = makeSchema();
