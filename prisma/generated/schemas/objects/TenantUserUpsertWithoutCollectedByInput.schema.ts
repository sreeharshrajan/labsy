import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserUpdateWithoutCollectedByInputObjectSchema } from './TenantUserUpdateWithoutCollectedByInput.schema';
import { TenantUserUncheckedUpdateWithoutCollectedByInputObjectSchema } from './TenantUserUncheckedUpdateWithoutCollectedByInput.schema';
import { TenantUserCreateWithoutCollectedByInputObjectSchema } from './TenantUserCreateWithoutCollectedByInput.schema';
import { TenantUserUncheckedCreateWithoutCollectedByInputObjectSchema } from './TenantUserUncheckedCreateWithoutCollectedByInput.schema';
import { TenantUserWhereInputObjectSchema } from './TenantUserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUserUpdateWithoutCollectedByInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateWithoutCollectedByInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantUserCreateWithoutCollectedByInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutCollectedByInputObjectSchema)]),
  where: z.lazy(() => TenantUserWhereInputObjectSchema).optional()
}).strict();
export const TenantUserUpsertWithoutCollectedByInputObjectSchema: z.ZodType<Prisma.TenantUserUpsertWithoutCollectedByInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpsertWithoutCollectedByInput>;
export const TenantUserUpsertWithoutCollectedByInputObjectZodSchema = makeSchema();
