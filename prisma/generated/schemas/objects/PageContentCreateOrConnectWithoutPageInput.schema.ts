import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentWhereUniqueInputObjectSchema } from './PageContentWhereUniqueInput.schema';
import { PageContentCreateWithoutPageInputObjectSchema } from './PageContentCreateWithoutPageInput.schema';
import { PageContentUncheckedCreateWithoutPageInputObjectSchema } from './PageContentUncheckedCreateWithoutPageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PageContentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PageContentCreateWithoutPageInputObjectSchema), z.lazy(() => PageContentUncheckedCreateWithoutPageInputObjectSchema)])
}).strict();
export const PageContentCreateOrConnectWithoutPageInputObjectSchema: z.ZodType<Prisma.PageContentCreateOrConnectWithoutPageInput> = makeSchema() as unknown as z.ZodType<Prisma.PageContentCreateOrConnectWithoutPageInput>;
export const PageContentCreateOrConnectWithoutPageInputObjectZodSchema = makeSchema();
