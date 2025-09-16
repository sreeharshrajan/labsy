import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema';
import { TenantUserUpdateWithoutTenantInputObjectSchema } from './TenantUserUpdateWithoutTenantInput.schema';
import { TenantUserUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantUserUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TenantUserUpdateWithoutTenantInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const TenantUserUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantUserUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpdateWithWhereUniqueWithoutTenantInput>;
export const TenantUserUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
