import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserScalarWhereInputObjectSchema } from './TenantUserScalarWhereInput.schema';
import { TenantUserUpdateManyMutationInputObjectSchema } from './TenantUserUpdateManyMutationInput.schema';
import { TenantUserUncheckedUpdateManyWithoutUserInputObjectSchema } from './TenantUserUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TenantUserUpdateManyMutationInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const TenantUserUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.TenantUserUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpdateManyWithWhereWithoutUserInput>;
export const TenantUserUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
