import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleCreateWithoutTenantUserRoleInputObjectSchema } from './TenantRoleCreateWithoutTenantUserRoleInput.schema';
import { TenantRoleUncheckedCreateWithoutTenantUserRoleInputObjectSchema } from './TenantRoleUncheckedCreateWithoutTenantUserRoleInput.schema';
import { TenantRoleCreateOrConnectWithoutTenantUserRoleInputObjectSchema } from './TenantRoleCreateOrConnectWithoutTenantUserRoleInput.schema';
import { TenantRoleUpsertWithoutTenantUserRoleInputObjectSchema } from './TenantRoleUpsertWithoutTenantUserRoleInput.schema';
import { TenantRoleWhereUniqueInputObjectSchema } from './TenantRoleWhereUniqueInput.schema';
import { TenantRoleUpdateToOneWithWhereWithoutTenantUserRoleInputObjectSchema } from './TenantRoleUpdateToOneWithWhereWithoutTenantUserRoleInput.schema';
import { TenantRoleUpdateWithoutTenantUserRoleInputObjectSchema } from './TenantRoleUpdateWithoutTenantUserRoleInput.schema';
import { TenantRoleUncheckedUpdateWithoutTenantUserRoleInputObjectSchema } from './TenantRoleUncheckedUpdateWithoutTenantUserRoleInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantRoleCreateWithoutTenantUserRoleInputObjectSchema), z.lazy(() => TenantRoleUncheckedCreateWithoutTenantUserRoleInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantRoleCreateOrConnectWithoutTenantUserRoleInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantRoleUpsertWithoutTenantUserRoleInputObjectSchema).optional(),
  connect: z.lazy(() => TenantRoleWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantRoleUpdateToOneWithWhereWithoutTenantUserRoleInputObjectSchema), z.lazy(() => TenantRoleUpdateWithoutTenantUserRoleInputObjectSchema), z.lazy(() => TenantRoleUncheckedUpdateWithoutTenantUserRoleInputObjectSchema)]).optional()
}).strict();
export const TenantRoleUpdateOneRequiredWithoutTenantUserRoleNestedInputObjectSchema: z.ZodType<Prisma.TenantRoleUpdateOneRequiredWithoutTenantUserRoleNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUpdateOneRequiredWithoutTenantUserRoleNestedInput>;
export const TenantRoleUpdateOneRequiredWithoutTenantUserRoleNestedInputObjectZodSchema = makeSchema();
