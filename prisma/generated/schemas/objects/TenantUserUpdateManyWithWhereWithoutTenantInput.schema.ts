import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserScalarWhereInputObjectSchema } from './TenantUserScalarWhereInput.schema';
import { TenantUserUpdateManyMutationInputObjectSchema } from './TenantUserUpdateManyMutationInput.schema';
import { TenantUserUncheckedUpdateManyWithoutTenantInputObjectSchema } from './TenantUserUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TenantUserUpdateManyMutationInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const TenantUserUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantUserUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpdateManyWithWhereWithoutTenantInput>;
export const TenantUserUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
