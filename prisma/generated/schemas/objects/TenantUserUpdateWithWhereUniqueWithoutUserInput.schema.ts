import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema';
import { TenantUserUpdateWithoutUserInputObjectSchema } from './TenantUserUpdateWithoutUserInput.schema';
import { TenantUserUncheckedUpdateWithoutUserInputObjectSchema } from './TenantUserUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TenantUserUpdateWithoutUserInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const TenantUserUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TenantUserUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpdateWithWhereUniqueWithoutUserInput>;
export const TenantUserUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
