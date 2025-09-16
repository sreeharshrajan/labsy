import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleScalarWhereInputObjectSchema } from './TenantUserRoleScalarWhereInput.schema';
import { TenantUserRoleUpdateManyMutationInputObjectSchema } from './TenantUserRoleUpdateManyMutationInput.schema';
import { TenantUserRoleUncheckedUpdateManyWithoutTenantUserInputObjectSchema } from './TenantUserRoleUncheckedUpdateManyWithoutTenantUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserRoleScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TenantUserRoleUpdateManyMutationInputObjectSchema), z.lazy(() => TenantUserRoleUncheckedUpdateManyWithoutTenantUserInputObjectSchema)])
}).strict();
export const TenantUserRoleUpdateManyWithWhereWithoutTenantUserInputObjectSchema: z.ZodType<Prisma.TenantUserRoleUpdateManyWithWhereWithoutTenantUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleUpdateManyWithWhereWithoutTenantUserInput>;
export const TenantUserRoleUpdateManyWithWhereWithoutTenantUserInputObjectZodSchema = makeSchema();
