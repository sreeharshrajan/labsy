import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleCreateWithoutPermissionsInputObjectSchema } from './TenantRoleCreateWithoutPermissionsInput.schema';
import { TenantRoleUncheckedCreateWithoutPermissionsInputObjectSchema } from './TenantRoleUncheckedCreateWithoutPermissionsInput.schema';
import { TenantRoleCreateOrConnectWithoutPermissionsInputObjectSchema } from './TenantRoleCreateOrConnectWithoutPermissionsInput.schema';
import { TenantRoleUpsertWithoutPermissionsInputObjectSchema } from './TenantRoleUpsertWithoutPermissionsInput.schema';
import { TenantRoleWhereUniqueInputObjectSchema } from './TenantRoleWhereUniqueInput.schema';
import { TenantRoleUpdateToOneWithWhereWithoutPermissionsInputObjectSchema } from './TenantRoleUpdateToOneWithWhereWithoutPermissionsInput.schema';
import { TenantRoleUpdateWithoutPermissionsInputObjectSchema } from './TenantRoleUpdateWithoutPermissionsInput.schema';
import { TenantRoleUncheckedUpdateWithoutPermissionsInputObjectSchema } from './TenantRoleUncheckedUpdateWithoutPermissionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantRoleCreateWithoutPermissionsInputObjectSchema), z.lazy(() => TenantRoleUncheckedCreateWithoutPermissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantRoleCreateOrConnectWithoutPermissionsInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantRoleUpsertWithoutPermissionsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantRoleWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantRoleUpdateToOneWithWhereWithoutPermissionsInputObjectSchema), z.lazy(() => TenantRoleUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => TenantRoleUncheckedUpdateWithoutPermissionsInputObjectSchema)]).optional()
}).strict();
export const TenantRoleUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema: z.ZodType<Prisma.TenantRoleUpdateOneRequiredWithoutPermissionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUpdateOneRequiredWithoutPermissionsNestedInput>;
export const TenantRoleUpdateOneRequiredWithoutPermissionsNestedInputObjectZodSchema = makeSchema();
