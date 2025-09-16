import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleCreateWithoutTenantInputObjectSchema } from './TenantRoleCreateWithoutTenantInput.schema';
import { TenantRoleUncheckedCreateWithoutTenantInputObjectSchema } from './TenantRoleUncheckedCreateWithoutTenantInput.schema';
import { TenantRoleCreateOrConnectWithoutTenantInputObjectSchema } from './TenantRoleCreateOrConnectWithoutTenantInput.schema';
import { TenantRoleCreateManyTenantInputEnvelopeObjectSchema } from './TenantRoleCreateManyTenantInputEnvelope.schema';
import { TenantRoleWhereUniqueInputObjectSchema } from './TenantRoleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantRoleCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantRoleCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => TenantRoleUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantRoleUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantRoleCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => TenantRoleCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantRoleCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TenantRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantRoleWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TenantRoleCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantRoleCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCreateNestedManyWithoutTenantInput>;
export const TenantRoleCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
