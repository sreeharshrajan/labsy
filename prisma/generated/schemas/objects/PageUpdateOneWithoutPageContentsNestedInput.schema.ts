import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageCreateWithoutPageContentsInputObjectSchema } from './PageCreateWithoutPageContentsInput.schema';
import { PageUncheckedCreateWithoutPageContentsInputObjectSchema } from './PageUncheckedCreateWithoutPageContentsInput.schema';
import { PageCreateOrConnectWithoutPageContentsInputObjectSchema } from './PageCreateOrConnectWithoutPageContentsInput.schema';
import { PageUpsertWithoutPageContentsInputObjectSchema } from './PageUpsertWithoutPageContentsInput.schema';
import { PageWhereInputObjectSchema } from './PageWhereInput.schema';
import { PageWhereUniqueInputObjectSchema } from './PageWhereUniqueInput.schema';
import { PageUpdateToOneWithWhereWithoutPageContentsInputObjectSchema } from './PageUpdateToOneWithWhereWithoutPageContentsInput.schema';
import { PageUpdateWithoutPageContentsInputObjectSchema } from './PageUpdateWithoutPageContentsInput.schema';
import { PageUncheckedUpdateWithoutPageContentsInputObjectSchema } from './PageUncheckedUpdateWithoutPageContentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PageCreateWithoutPageContentsInputObjectSchema), z.lazy(() => PageUncheckedCreateWithoutPageContentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PageCreateOrConnectWithoutPageContentsInputObjectSchema).optional(),
  upsert: z.lazy(() => PageUpsertWithoutPageContentsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => PageWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => PageWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => PageWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PageUpdateToOneWithWhereWithoutPageContentsInputObjectSchema), z.lazy(() => PageUpdateWithoutPageContentsInputObjectSchema), z.lazy(() => PageUncheckedUpdateWithoutPageContentsInputObjectSchema)]).optional()
}).strict();
export const PageUpdateOneWithoutPageContentsNestedInputObjectSchema: z.ZodType<Prisma.PageUpdateOneWithoutPageContentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PageUpdateOneWithoutPageContentsNestedInput>;
export const PageUpdateOneWithoutPageContentsNestedInputObjectZodSchema = makeSchema();
