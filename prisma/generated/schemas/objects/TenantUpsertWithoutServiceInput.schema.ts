import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutServiceInputObjectSchema } from './TenantUpdateWithoutServiceInput.schema';
import { TenantUncheckedUpdateWithoutServiceInputObjectSchema } from './TenantUncheckedUpdateWithoutServiceInput.schema';
import { TenantCreateWithoutServiceInputObjectSchema } from './TenantCreateWithoutServiceInput.schema';
import { TenantUncheckedCreateWithoutServiceInputObjectSchema } from './TenantUncheckedCreateWithoutServiceInput.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutServiceInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutServiceInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutServiceInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutServiceInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutServiceInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutServiceInput>;
export const TenantUpsertWithoutServiceInputObjectZodSchema = makeSchema();
