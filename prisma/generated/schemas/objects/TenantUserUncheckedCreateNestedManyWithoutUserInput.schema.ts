import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateWithoutUserInputObjectSchema } from './TenantUserCreateWithoutUserInput.schema';
import { TenantUserUncheckedCreateWithoutUserInputObjectSchema } from './TenantUserUncheckedCreateWithoutUserInput.schema';
import { TenantUserCreateOrConnectWithoutUserInputObjectSchema } from './TenantUserCreateOrConnectWithoutUserInput.schema';
import { TenantUserCreateManyUserInputEnvelopeObjectSchema } from './TenantUserCreateManyUserInputEnvelope.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantUserCreateWithoutUserInputObjectSchema), z.lazy(() => TenantUserCreateWithoutUserInputObjectSchema).array(), z.lazy(() => TenantUserUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantUserCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => TenantUserCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantUserCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TenantUserWhereUniqueInputObjectSchema), z.lazy(() => TenantUserWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TenantUserUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.TenantUserUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUncheckedCreateNestedManyWithoutUserInput>;
export const TenantUserUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
