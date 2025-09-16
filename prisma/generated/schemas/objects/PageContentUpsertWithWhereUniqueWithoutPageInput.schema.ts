import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentWhereUniqueInputObjectSchema } from './PageContentWhereUniqueInput.schema';
import { PageContentUpdateWithoutPageInputObjectSchema } from './PageContentUpdateWithoutPageInput.schema';
import { PageContentUncheckedUpdateWithoutPageInputObjectSchema } from './PageContentUncheckedUpdateWithoutPageInput.schema';
import { PageContentCreateWithoutPageInputObjectSchema } from './PageContentCreateWithoutPageInput.schema';
import { PageContentUncheckedCreateWithoutPageInputObjectSchema } from './PageContentUncheckedCreateWithoutPageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PageContentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PageContentUpdateWithoutPageInputObjectSchema), z.lazy(() => PageContentUncheckedUpdateWithoutPageInputObjectSchema)]),
  create: z.union([z.lazy(() => PageContentCreateWithoutPageInputObjectSchema), z.lazy(() => PageContentUncheckedCreateWithoutPageInputObjectSchema)])
}).strict();
export const PageContentUpsertWithWhereUniqueWithoutPageInputObjectSchema: z.ZodType<Prisma.PageContentUpsertWithWhereUniqueWithoutPageInput> = makeSchema() as unknown as z.ZodType<Prisma.PageContentUpsertWithWhereUniqueWithoutPageInput>;
export const PageContentUpsertWithWhereUniqueWithoutPageInputObjectZodSchema = makeSchema();
