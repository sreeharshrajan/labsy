import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutServiceCategoryInputObjectSchema } from './TenantUpdateWithoutServiceCategoryInput.schema';
import { TenantUncheckedUpdateWithoutServiceCategoryInputObjectSchema } from './TenantUncheckedUpdateWithoutServiceCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutServiceCategoryInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutServiceCategoryInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutServiceCategoryInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutServiceCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutServiceCategoryInput>;
export const TenantUpdateToOneWithWhereWithoutServiceCategoryInputObjectZodSchema = makeSchema();
