import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentCreateWithoutPageInputObjectSchema } from './PageContentCreateWithoutPageInput.schema';
import { PageContentUncheckedCreateWithoutPageInputObjectSchema } from './PageContentUncheckedCreateWithoutPageInput.schema';
import { PageContentCreateOrConnectWithoutPageInputObjectSchema } from './PageContentCreateOrConnectWithoutPageInput.schema';
import { PageContentUpsertWithWhereUniqueWithoutPageInputObjectSchema } from './PageContentUpsertWithWhereUniqueWithoutPageInput.schema';
import { PageContentCreateManyPageInputEnvelopeObjectSchema } from './PageContentCreateManyPageInputEnvelope.schema';
import { PageContentWhereUniqueInputObjectSchema } from './PageContentWhereUniqueInput.schema';
import { PageContentUpdateWithWhereUniqueWithoutPageInputObjectSchema } from './PageContentUpdateWithWhereUniqueWithoutPageInput.schema';
import { PageContentUpdateManyWithWhereWithoutPageInputObjectSchema } from './PageContentUpdateManyWithWhereWithoutPageInput.schema';
import { PageContentScalarWhereInputObjectSchema } from './PageContentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PageContentCreateWithoutPageInputObjectSchema), z.lazy(() => PageContentCreateWithoutPageInputObjectSchema).array(), z.lazy(() => PageContentUncheckedCreateWithoutPageInputObjectSchema), z.lazy(() => PageContentUncheckedCreateWithoutPageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PageContentCreateOrConnectWithoutPageInputObjectSchema), z.lazy(() => PageContentCreateOrConnectWithoutPageInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PageContentUpsertWithWhereUniqueWithoutPageInputObjectSchema), z.lazy(() => PageContentUpsertWithWhereUniqueWithoutPageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PageContentCreateManyPageInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PageContentWhereUniqueInputObjectSchema), z.lazy(() => PageContentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PageContentWhereUniqueInputObjectSchema), z.lazy(() => PageContentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PageContentWhereUniqueInputObjectSchema), z.lazy(() => PageContentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PageContentWhereUniqueInputObjectSchema), z.lazy(() => PageContentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PageContentUpdateWithWhereUniqueWithoutPageInputObjectSchema), z.lazy(() => PageContentUpdateWithWhereUniqueWithoutPageInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PageContentUpdateManyWithWhereWithoutPageInputObjectSchema), z.lazy(() => PageContentUpdateManyWithWhereWithoutPageInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PageContentScalarWhereInputObjectSchema), z.lazy(() => PageContentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PageContentUpdateManyWithoutPageNestedInputObjectSchema: z.ZodType<Prisma.PageContentUpdateManyWithoutPageNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PageContentUpdateManyWithoutPageNestedInput>;
export const PageContentUpdateManyWithoutPageNestedInputObjectZodSchema = makeSchema();
