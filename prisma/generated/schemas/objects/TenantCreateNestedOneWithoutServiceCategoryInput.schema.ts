import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutServiceCategoryInputObjectSchema } from './TenantCreateWithoutServiceCategoryInput.schema';
import { TenantUncheckedCreateWithoutServiceCategoryInputObjectSchema } from './TenantUncheckedCreateWithoutServiceCategoryInput.schema';
import { TenantCreateOrConnectWithoutServiceCategoryInputObjectSchema } from './TenantCreateOrConnectWithoutServiceCategoryInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutServiceCategoryInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutServiceCategoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutServiceCategoryInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutServiceCategoryInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutServiceCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutServiceCategoryInput>;
export const TenantCreateNestedOneWithoutServiceCategoryInputObjectZodSchema = makeSchema();
