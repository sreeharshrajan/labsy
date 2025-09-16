import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentScalarWhereInputObjectSchema } from './PageContentScalarWhereInput.schema';
import { PageContentUpdateManyMutationInputObjectSchema } from './PageContentUpdateManyMutationInput.schema';
import { PageContentUncheckedUpdateManyWithoutPageInputObjectSchema } from './PageContentUncheckedUpdateManyWithoutPageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PageContentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PageContentUpdateManyMutationInputObjectSchema), z.lazy(() => PageContentUncheckedUpdateManyWithoutPageInputObjectSchema)])
}).strict();
export const PageContentUpdateManyWithWhereWithoutPageInputObjectSchema: z.ZodType<Prisma.PageContentUpdateManyWithWhereWithoutPageInput> = makeSchema() as unknown as z.ZodType<Prisma.PageContentUpdateManyWithWhereWithoutPageInput>;
export const PageContentUpdateManyWithWhereWithoutPageInputObjectZodSchema = makeSchema();
