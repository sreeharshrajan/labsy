import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  pageContents: z.boolean().optional()
}).strict();
export const PageCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.PageCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.PageCountOutputTypeSelect>;
export const PageCountOutputTypeSelectObjectZodSchema = makeSchema();
