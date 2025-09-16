import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleCreateWithoutTenantUserInputObjectSchema } from './TenantUserRoleCreateWithoutTenantUserInput.schema';
import { TenantUserRoleUncheckedCreateWithoutTenantUserInputObjectSchema } from './TenantUserRoleUncheckedCreateWithoutTenantUserInput.schema';
import { TenantUserRoleCreateOrConnectWithoutTenantUserInputObjectSchema } from './TenantUserRoleCreateOrConnectWithoutTenantUserInput.schema';
import { TenantUserRoleCreateManyTenantUserInputEnvelopeObjectSchema } from './TenantUserRoleCreateManyTenantUserInputEnvelope.schema';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './TenantUserRoleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantUserRoleCreateWithoutTenantUserInputObjectSchema), z.lazy(() => TenantUserRoleCreateWithoutTenantUserInputObjectSchema).array(), z.lazy(() => TenantUserRoleUncheckedCreateWithoutTenantUserInputObjectSchema), z.lazy(() => TenantUserRoleUncheckedCreateWithoutTenantUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantUserRoleCreateOrConnectWithoutTenantUserInputObjectSchema), z.lazy(() => TenantUserRoleCreateOrConnectWithoutTenantUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantUserRoleCreateManyTenantUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TenantUserRoleUncheckedCreateNestedManyWithoutTenantUserInputObjectSchema: z.ZodType<Prisma.TenantUserRoleUncheckedCreateNestedManyWithoutTenantUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleUncheckedCreateNestedManyWithoutTenantUserInput>;
export const TenantUserRoleUncheckedCreateNestedManyWithoutTenantUserInputObjectZodSchema = makeSchema();
