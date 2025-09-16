import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateWithoutCollectedByInputObjectSchema } from './TenantUserCreateWithoutCollectedByInput.schema';
import { TenantUserUncheckedCreateWithoutCollectedByInputObjectSchema } from './TenantUserUncheckedCreateWithoutCollectedByInput.schema';
import { TenantUserCreateOrConnectWithoutCollectedByInputObjectSchema } from './TenantUserCreateOrConnectWithoutCollectedByInput.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantUserCreateWithoutCollectedByInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutCollectedByInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantUserCreateOrConnectWithoutCollectedByInputObjectSchema).optional(),
  connect: z.lazy(() => TenantUserWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantUserCreateNestedOneWithoutCollectedByInputObjectSchema: z.ZodType<Prisma.TenantUserCreateNestedOneWithoutCollectedByInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateNestedOneWithoutCollectedByInput>;
export const TenantUserCreateNestedOneWithoutCollectedByInputObjectZodSchema = makeSchema();
