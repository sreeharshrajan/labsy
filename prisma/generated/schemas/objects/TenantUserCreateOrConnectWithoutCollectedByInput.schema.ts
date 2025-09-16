import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema';
import { TenantUserCreateWithoutCollectedByInputObjectSchema } from './TenantUserCreateWithoutCollectedByInput.schema';
import { TenantUserUncheckedCreateWithoutCollectedByInputObjectSchema } from './TenantUserUncheckedCreateWithoutCollectedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantUserCreateWithoutCollectedByInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutCollectedByInputObjectSchema)])
}).strict();
export const TenantUserCreateOrConnectWithoutCollectedByInputObjectSchema: z.ZodType<Prisma.TenantUserCreateOrConnectWithoutCollectedByInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateOrConnectWithoutCollectedByInput>;
export const TenantUserCreateOrConnectWithoutCollectedByInputObjectZodSchema = makeSchema();
