import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentCreateManyPageInputObjectSchema } from './PageContentCreateManyPageInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PageContentCreateManyPageInputObjectSchema), z.lazy(() => PageContentCreateManyPageInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PageContentCreateManyPageInputEnvelopeObjectSchema: z.ZodType<Prisma.PageContentCreateManyPageInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PageContentCreateManyPageInputEnvelope>;
export const PageContentCreateManyPageInputEnvelopeObjectZodSchema = makeSchema();
