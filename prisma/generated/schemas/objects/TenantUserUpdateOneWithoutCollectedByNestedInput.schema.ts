import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateWithoutCollectedByInputObjectSchema } from './TenantUserCreateWithoutCollectedByInput.schema';
import { TenantUserUncheckedCreateWithoutCollectedByInputObjectSchema } from './TenantUserUncheckedCreateWithoutCollectedByInput.schema';
import { TenantUserCreateOrConnectWithoutCollectedByInputObjectSchema } from './TenantUserCreateOrConnectWithoutCollectedByInput.schema';
import { TenantUserUpsertWithoutCollectedByInputObjectSchema } from './TenantUserUpsertWithoutCollectedByInput.schema';
import { TenantUserWhereInputObjectSchema } from './TenantUserWhereInput.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema';
import { TenantUserUpdateToOneWithWhereWithoutCollectedByInputObjectSchema } from './TenantUserUpdateToOneWithWhereWithoutCollectedByInput.schema';
import { TenantUserUpdateWithoutCollectedByInputObjectSchema } from './TenantUserUpdateWithoutCollectedByInput.schema';
import { TenantUserUncheckedUpdateWithoutCollectedByInputObjectSchema } from './TenantUserUncheckedUpdateWithoutCollectedByInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantUserCreateWithoutCollectedByInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutCollectedByInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantUserCreateOrConnectWithoutCollectedByInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUserUpsertWithoutCollectedByInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TenantUserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TenantUserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TenantUserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUserUpdateToOneWithWhereWithoutCollectedByInputObjectSchema), z.lazy(() => TenantUserUpdateWithoutCollectedByInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateWithoutCollectedByInputObjectSchema)]).optional()
}).strict();
export const TenantUserUpdateOneWithoutCollectedByNestedInputObjectSchema: z.ZodType<Prisma.TenantUserUpdateOneWithoutCollectedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpdateOneWithoutCollectedByNestedInput>;
export const TenantUserUpdateOneWithoutCollectedByNestedInputObjectZodSchema = makeSchema();
