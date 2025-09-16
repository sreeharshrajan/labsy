import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageWhereInputObjectSchema } from './PageWhereInput.schema';
import { PageUpdateWithoutPageContentsInputObjectSchema } from './PageUpdateWithoutPageContentsInput.schema';
import { PageUncheckedUpdateWithoutPageContentsInputObjectSchema } from './PageUncheckedUpdateWithoutPageContentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PageWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PageUpdateWithoutPageContentsInputObjectSchema), z.lazy(() => PageUncheckedUpdateWithoutPageContentsInputObjectSchema)])
}).strict();
export const PageUpdateToOneWithWhereWithoutPageContentsInputObjectSchema: z.ZodType<Prisma.PageUpdateToOneWithWhereWithoutPageContentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PageUpdateToOneWithWhereWithoutPageContentsInput>;
export const PageUpdateToOneWithWhereWithoutPageContentsInputObjectZodSchema = makeSchema();
