import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema';
import { TenantUserUpdateWithoutUserInputObjectSchema } from './TenantUserUpdateWithoutUserInput.schema';
import { TenantUserUncheckedUpdateWithoutUserInputObjectSchema } from './TenantUserUncheckedUpdateWithoutUserInput.schema';
import { TenantUserCreateWithoutUserInputObjectSchema } from './TenantUserCreateWithoutUserInput.schema';
import { TenantUserUncheckedCreateWithoutUserInputObjectSchema } from './TenantUserUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TenantUserUpdateWithoutUserInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantUserCreateWithoutUserInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TenantUserUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TenantUserUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpsertWithWhereUniqueWithoutUserInput>;
export const TenantUserUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
