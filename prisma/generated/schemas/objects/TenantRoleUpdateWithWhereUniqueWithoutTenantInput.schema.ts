import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleWhereUniqueInputObjectSchema } from './TenantRoleWhereUniqueInput.schema';
import { TenantRoleUpdateWithoutTenantInputObjectSchema } from './TenantRoleUpdateWithoutTenantInput.schema';
import { TenantRoleUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantRoleUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantRoleWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TenantRoleUpdateWithoutTenantInputObjectSchema), z.lazy(() => TenantRoleUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const TenantRoleUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantRoleUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUpdateWithWhereUniqueWithoutTenantInput>;
export const TenantRoleUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
