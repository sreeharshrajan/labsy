import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleCreateNestedOneWithoutTenantUserRoleInputObjectSchema } from './TenantRoleCreateNestedOneWithoutTenantUserRoleInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  role: z.lazy(() => TenantRoleCreateNestedOneWithoutTenantUserRoleInputObjectSchema)
}).strict();
export const TenantUserRoleCreateWithoutTenantUserInputObjectSchema: z.ZodType<Prisma.TenantUserRoleCreateWithoutTenantUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleCreateWithoutTenantUserInput>;
export const TenantUserRoleCreateWithoutTenantUserInputObjectZodSchema = makeSchema();
