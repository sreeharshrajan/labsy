import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleScalarWhereInputObjectSchema } from './TenantRoleScalarWhereInput.schema';
import { TenantRoleUpdateManyMutationInputObjectSchema } from './TenantRoleUpdateManyMutationInput.schema';
import { TenantRoleUncheckedUpdateManyWithoutTenantInputObjectSchema } from './TenantRoleUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantRoleScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TenantRoleUpdateManyMutationInputObjectSchema), z.lazy(() => TenantRoleUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const TenantRoleUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantRoleUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUpdateManyWithWhereWithoutTenantInput>;
export const TenantRoleUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
