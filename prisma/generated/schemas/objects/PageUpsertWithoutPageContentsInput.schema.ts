import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageUpdateWithoutPageContentsInputObjectSchema } from './PageUpdateWithoutPageContentsInput.schema';
import { PageUncheckedUpdateWithoutPageContentsInputObjectSchema } from './PageUncheckedUpdateWithoutPageContentsInput.schema';
import { PageCreateWithoutPageContentsInputObjectSchema } from './PageCreateWithoutPageContentsInput.schema';
import { PageUncheckedCreateWithoutPageContentsInputObjectSchema } from './PageUncheckedCreateWithoutPageContentsInput.schema';
import { PageWhereInputObjectSchema } from './PageWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PageUpdateWithoutPageContentsInputObjectSchema), z.lazy(() => PageUncheckedUpdateWithoutPageContentsInputObjectSchema)]),
  create: z.union([z.lazy(() => PageCreateWithoutPageContentsInputObjectSchema), z.lazy(() => PageUncheckedCreateWithoutPageContentsInputObjectSchema)]),
  where: z.lazy(() => PageWhereInputObjectSchema).optional()
}).strict();
export const PageUpsertWithoutPageContentsInputObjectSchema: z.ZodType<Prisma.PageUpsertWithoutPageContentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PageUpsertWithoutPageContentsInput>;
export const PageUpsertWithoutPageContentsInputObjectZodSchema = makeSchema();
