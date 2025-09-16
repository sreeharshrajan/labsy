import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageWhereUniqueInputObjectSchema } from './PageWhereUniqueInput.schema';
import { PageCreateWithoutPageContentsInputObjectSchema } from './PageCreateWithoutPageContentsInput.schema';
import { PageUncheckedCreateWithoutPageContentsInputObjectSchema } from './PageUncheckedCreateWithoutPageContentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PageCreateWithoutPageContentsInputObjectSchema), z.lazy(() => PageUncheckedCreateWithoutPageContentsInputObjectSchema)])
}).strict();
export const PageCreateOrConnectWithoutPageContentsInputObjectSchema: z.ZodType<Prisma.PageCreateOrConnectWithoutPageContentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PageCreateOrConnectWithoutPageContentsInput>;
export const PageCreateOrConnectWithoutPageContentsInputObjectZodSchema = makeSchema();
