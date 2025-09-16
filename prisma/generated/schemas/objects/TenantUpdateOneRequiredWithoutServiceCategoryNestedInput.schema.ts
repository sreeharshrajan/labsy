import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutServiceCategoryInputObjectSchema } from './TenantCreateWithoutServiceCategoryInput.schema';
import { TenantUncheckedCreateWithoutServiceCategoryInputObjectSchema } from './TenantUncheckedCreateWithoutServiceCategoryInput.schema';
import { TenantCreateOrConnectWithoutServiceCategoryInputObjectSchema } from './TenantCreateOrConnectWithoutServiceCategoryInput.schema';
import { TenantUpsertWithoutServiceCategoryInputObjectSchema } from './TenantUpsertWithoutServiceCategoryInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutServiceCategoryInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutServiceCategoryInput.schema';
import { TenantUpdateWithoutServiceCategoryInputObjectSchema } from './TenantUpdateWithoutServiceCategoryInput.schema';
import { TenantUncheckedUpdateWithoutServiceCategoryInputObjectSchema } from './TenantUncheckedUpdateWithoutServiceCategoryInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutServiceCategoryInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutServiceCategoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutServiceCategoryInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutServiceCategoryInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutServiceCategoryInputObjectSchema), z.lazy(() => TenantUpdateWithoutServiceCategoryInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutServiceCategoryInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutServiceCategoryNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutServiceCategoryNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutServiceCategoryNestedInput>;
export const TenantUpdateOneRequiredWithoutServiceCategoryNestedInputObjectZodSchema = makeSchema();
