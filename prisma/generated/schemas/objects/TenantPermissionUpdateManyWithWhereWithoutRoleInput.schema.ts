import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantPermissionScalarWhereInputObjectSchema } from './TenantPermissionScalarWhereInput.schema';
import { TenantPermissionUpdateManyMutationInputObjectSchema } from './TenantPermissionUpdateManyMutationInput.schema';
import { TenantPermissionUncheckedUpdateManyWithoutRoleInputObjectSchema } from './TenantPermissionUncheckedUpdateManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TenantPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => TenantPermissionUncheckedUpdateManyWithoutRoleInputObjectSchema)])
}).strict();
export const TenantPermissionUpdateManyWithWhereWithoutRoleInputObjectSchema: z.ZodType<Prisma.TenantPermissionUpdateManyWithWhereWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionUpdateManyWithWhereWithoutRoleInput>;
export const TenantPermissionUpdateManyWithWhereWithoutRoleInputObjectZodSchema = makeSchema();
