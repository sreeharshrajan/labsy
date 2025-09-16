import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema';
import { TenantUserUpdateWithoutTenantInputObjectSchema } from './TenantUserUpdateWithoutTenantInput.schema';
import { TenantUserUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantUserUncheckedUpdateWithoutTenantInput.schema';
import { TenantUserCreateWithoutTenantInputObjectSchema } from './TenantUserCreateWithoutTenantInput.schema';
import { TenantUserUncheckedCreateWithoutTenantInputObjectSchema } from './TenantUserUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TenantUserUpdateWithoutTenantInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantUserCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const TenantUserUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantUserUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpsertWithWhereUniqueWithoutTenantInput>;
export const TenantUserUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
