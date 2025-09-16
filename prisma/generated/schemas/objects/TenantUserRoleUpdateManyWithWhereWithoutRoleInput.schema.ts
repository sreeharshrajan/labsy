import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleScalarWhereInputObjectSchema } from './TenantUserRoleScalarWhereInput.schema';
import { TenantUserRoleUpdateManyMutationInputObjectSchema } from './TenantUserRoleUpdateManyMutationInput.schema';
import { TenantUserRoleUncheckedUpdateManyWithoutRoleInputObjectSchema } from './TenantUserRoleUncheckedUpdateManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserRoleScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TenantUserRoleUpdateManyMutationInputObjectSchema), z.lazy(() => TenantUserRoleUncheckedUpdateManyWithoutRoleInputObjectSchema)])
}).strict();
export const TenantUserRoleUpdateManyWithWhereWithoutRoleInputObjectSchema: z.ZodType<Prisma.TenantUserRoleUpdateManyWithWhereWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleUpdateManyWithWhereWithoutRoleInput>;
export const TenantUserRoleUpdateManyWithWhereWithoutRoleInputObjectZodSchema = makeSchema();
