import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateWithoutTenantInputObjectSchema } from './TenantUserCreateWithoutTenantInput.schema';
import { TenantUserUncheckedCreateWithoutTenantInputObjectSchema } from './TenantUserUncheckedCreateWithoutTenantInput.schema';
import { TenantUserCreateOrConnectWithoutTenantInputObjectSchema } from './TenantUserCreateOrConnectWithoutTenantInput.schema';
import { TenantUserCreateManyTenantInputEnvelopeObjectSchema } from './TenantUserCreateManyTenantInputEnvelope.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantUserCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantUserCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => TenantUserUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantUserCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => TenantUserCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantUserCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TenantUserWhereUniqueInputObjectSchema), z.lazy(() => TenantUserWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TenantUserCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantUserCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateNestedManyWithoutTenantInput>;
export const TenantUserCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
