import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateWithoutTenantRolesInputObjectSchema } from './TenantUserCreateWithoutTenantRolesInput.schema';
import { TenantUserUncheckedCreateWithoutTenantRolesInputObjectSchema } from './TenantUserUncheckedCreateWithoutTenantRolesInput.schema';
import { TenantUserCreateOrConnectWithoutTenantRolesInputObjectSchema } from './TenantUserCreateOrConnectWithoutTenantRolesInput.schema';
import { TenantUserUpsertWithoutTenantRolesInputObjectSchema } from './TenantUserUpsertWithoutTenantRolesInput.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema';
import { TenantUserUpdateToOneWithWhereWithoutTenantRolesInputObjectSchema } from './TenantUserUpdateToOneWithWhereWithoutTenantRolesInput.schema';
import { TenantUserUpdateWithoutTenantRolesInputObjectSchema } from './TenantUserUpdateWithoutTenantRolesInput.schema';
import { TenantUserUncheckedUpdateWithoutTenantRolesInputObjectSchema } from './TenantUserUncheckedUpdateWithoutTenantRolesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantUserCreateWithoutTenantRolesInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutTenantRolesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantUserCreateOrConnectWithoutTenantRolesInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUserUpsertWithoutTenantRolesInputObjectSchema).optional(),
  connect: z.lazy(() => TenantUserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUserUpdateToOneWithWhereWithoutTenantRolesInputObjectSchema), z.lazy(() => TenantUserUpdateWithoutTenantRolesInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateWithoutTenantRolesInputObjectSchema)]).optional()
}).strict();
export const TenantUserUpdateOneRequiredWithoutTenantRolesNestedInputObjectSchema: z.ZodType<Prisma.TenantUserUpdateOneRequiredWithoutTenantRolesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpdateOneRequiredWithoutTenantRolesNestedInput>;
export const TenantUserUpdateOneRequiredWithoutTenantRolesNestedInputObjectZodSchema = makeSchema();
