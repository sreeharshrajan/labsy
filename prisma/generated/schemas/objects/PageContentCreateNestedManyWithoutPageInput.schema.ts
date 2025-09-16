import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentCreateWithoutPageInputObjectSchema } from './PageContentCreateWithoutPageInput.schema';
import { PageContentUncheckedCreateWithoutPageInputObjectSchema } from './PageContentUncheckedCreateWithoutPageInput.schema';
import { PageContentCreateOrConnectWithoutPageInputObjectSchema } from './PageContentCreateOrConnectWithoutPageInput.schema';
import { PageContentCreateManyPageInputEnvelopeObjectSchema } from './PageContentCreateManyPageInputEnvelope.schema';
import { PageContentWhereUniqueInputObjectSchema } from './PageContentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PageContentCreateWithoutPageInputObjectSchema), z.lazy(() => PageContentCreateWithoutPageInputObjectSchema).array(), z.lazy(() => PageContentUncheckedCreateWithoutPageInputObjectSchema), z.lazy(() => PageContentUncheckedCreateWithoutPageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PageContentCreateOrConnectWithoutPageInputObjectSchema), z.lazy(() => PageContentCreateOrConnectWithoutPageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PageContentCreateManyPageInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PageContentWhereUniqueInputObjectSchema), z.lazy(() => PageContentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PageContentCreateNestedManyWithoutPageInputObjectSchema: z.ZodType<Prisma.PageContentCreateNestedManyWithoutPageInput> = makeSchema() as unknown as z.ZodType<Prisma.PageContentCreateNestedManyWithoutPageInput>;
export const PageContentCreateNestedManyWithoutPageInputObjectZodSchema = makeSchema();
