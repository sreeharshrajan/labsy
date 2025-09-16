import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleCreateWithoutRoleInputObjectSchema } from './TenantUserRoleCreateWithoutRoleInput.schema';
import { TenantUserRoleUncheckedCreateWithoutRoleInputObjectSchema } from './TenantUserRoleUncheckedCreateWithoutRoleInput.schema';
import { TenantUserRoleCreateOrConnectWithoutRoleInputObjectSchema } from './TenantUserRoleCreateOrConnectWithoutRoleInput.schema';
import { TenantUserRoleCreateManyRoleInputEnvelopeObjectSchema } from './TenantUserRoleCreateManyRoleInputEnvelope.schema';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './TenantUserRoleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantUserRoleCreateWithoutRoleInputObjectSchema), z.lazy(() => TenantUserRoleCreateWithoutRoleInputObjectSchema).array(), z.lazy(() => TenantUserRoleUncheckedCreateWithoutRoleInputObjectSchema), z.lazy(() => TenantUserRoleUncheckedCreateWithoutRoleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantUserRoleCreateOrConnectWithoutRoleInputObjectSchema), z.lazy(() => TenantUserRoleCreateOrConnectWithoutRoleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantUserRoleCreateManyRoleInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TenantUserRoleUncheckedCreateNestedManyWithoutRoleInputObjectSchema: z.ZodType<Prisma.TenantUserRoleUncheckedCreateNestedManyWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleUncheckedCreateNestedManyWithoutRoleInput>;
export const TenantUserRoleUncheckedCreateNestedManyWithoutRoleInputObjectZodSchema = makeSchema();
