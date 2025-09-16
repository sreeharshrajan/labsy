import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutUsersInputObjectSchema } from './TenantUpdateWithoutUsersInput.schema';
import { TenantUncheckedUpdateWithoutUsersInputObjectSchema } from './TenantUncheckedUpdateWithoutUsersInput.schema';
import { TenantCreateWithoutUsersInputObjectSchema } from './TenantCreateWithoutUsersInput.schema';
import { TenantUncheckedCreateWithoutUsersInputObjectSchema } from './TenantUncheckedCreateWithoutUsersInput.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutUsersInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutUsersInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutUsersInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutUsersInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutUsersInput>;
export const TenantUpsertWithoutUsersInputObjectZodSchema = makeSchema();
