import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutServiceCategoryInputObjectSchema } from './TenantUpdateWithoutServiceCategoryInput.schema';
import { TenantUncheckedUpdateWithoutServiceCategoryInputObjectSchema } from './TenantUncheckedUpdateWithoutServiceCategoryInput.schema';
import { TenantCreateWithoutServiceCategoryInputObjectSchema } from './TenantCreateWithoutServiceCategoryInput.schema';
import { TenantUncheckedCreateWithoutServiceCategoryInputObjectSchema } from './TenantUncheckedCreateWithoutServiceCategoryInput.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutServiceCategoryInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutServiceCategoryInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutServiceCategoryInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutServiceCategoryInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutServiceCategoryInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutServiceCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutServiceCategoryInput>;
export const TenantUpsertWithoutServiceCategoryInputObjectZodSchema = makeSchema();
