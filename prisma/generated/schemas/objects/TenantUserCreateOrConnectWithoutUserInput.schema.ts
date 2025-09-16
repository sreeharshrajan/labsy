import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema';
import { TenantUserCreateWithoutUserInputObjectSchema } from './TenantUserCreateWithoutUserInput.schema';
import { TenantUserUncheckedCreateWithoutUserInputObjectSchema } from './TenantUserUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantUserCreateWithoutUserInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TenantUserCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.TenantUserCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateOrConnectWithoutUserInput>;
export const TenantUserCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
