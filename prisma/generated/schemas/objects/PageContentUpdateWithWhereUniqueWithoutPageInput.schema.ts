import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentWhereUniqueInputObjectSchema } from './PageContentWhereUniqueInput.schema';
import { PageContentUpdateWithoutPageInputObjectSchema } from './PageContentUpdateWithoutPageInput.schema';
import { PageContentUncheckedUpdateWithoutPageInputObjectSchema } from './PageContentUncheckedUpdateWithoutPageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PageContentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PageContentUpdateWithoutPageInputObjectSchema), z.lazy(() => PageContentUncheckedUpdateWithoutPageInputObjectSchema)])
}).strict();
export const PageContentUpdateWithWhereUniqueWithoutPageInputObjectSchema: z.ZodType<Prisma.PageContentUpdateWithWhereUniqueWithoutPageInput> = makeSchema() as unknown as z.ZodType<Prisma.PageContentUpdateWithWhereUniqueWithoutPageInput>;
export const PageContentUpdateWithWhereUniqueWithoutPageInputObjectZodSchema = makeSchema();
