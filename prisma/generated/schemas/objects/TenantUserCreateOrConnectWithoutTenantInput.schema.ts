import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema';
import { TenantUserCreateWithoutTenantInputObjectSchema } from './TenantUserCreateWithoutTenantInput.schema';
import { TenantUserUncheckedCreateWithoutTenantInputObjectSchema } from './TenantUserUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantUserCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const TenantUserCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantUserCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateOrConnectWithoutTenantInput>;
export const TenantUserCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
