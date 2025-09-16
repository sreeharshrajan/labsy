import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutServiceCategoryInputObjectSchema } from './TenantCreateWithoutServiceCategoryInput.schema';
import { TenantUncheckedCreateWithoutServiceCategoryInputObjectSchema } from './TenantUncheckedCreateWithoutServiceCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutServiceCategoryInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutServiceCategoryInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutServiceCategoryInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutServiceCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutServiceCategoryInput>;
export const TenantCreateOrConnectWithoutServiceCategoryInputObjectZodSchema = makeSchema();
