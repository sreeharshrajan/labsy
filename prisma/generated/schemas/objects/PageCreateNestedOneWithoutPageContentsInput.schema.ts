import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageCreateWithoutPageContentsInputObjectSchema } from './PageCreateWithoutPageContentsInput.schema';
import { PageUncheckedCreateWithoutPageContentsInputObjectSchema } from './PageUncheckedCreateWithoutPageContentsInput.schema';
import { PageCreateOrConnectWithoutPageContentsInputObjectSchema } from './PageCreateOrConnectWithoutPageContentsInput.schema';
import { PageWhereUniqueInputObjectSchema } from './PageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PageCreateWithoutPageContentsInputObjectSchema), z.lazy(() => PageUncheckedCreateWithoutPageContentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PageCreateOrConnectWithoutPageContentsInputObjectSchema).optional(),
  connect: z.lazy(() => PageWhereUniqueInputObjectSchema).optional()
}).strict();
export const PageCreateNestedOneWithoutPageContentsInputObjectSchema: z.ZodType<Prisma.PageCreateNestedOneWithoutPageContentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PageCreateNestedOneWithoutPageContentsInput>;
export const PageCreateNestedOneWithoutPageContentsInputObjectZodSchema = makeSchema();
