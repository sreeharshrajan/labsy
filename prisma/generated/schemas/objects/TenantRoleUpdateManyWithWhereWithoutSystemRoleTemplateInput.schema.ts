import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleScalarWhereInputObjectSchema } from './TenantRoleScalarWhereInput.schema';
import { TenantRoleUpdateManyMutationInputObjectSchema } from './TenantRoleUpdateManyMutationInput.schema';
import { TenantRoleUncheckedUpdateManyWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleUncheckedUpdateManyWithoutSystemRoleTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantRoleScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TenantRoleUpdateManyMutationInputObjectSchema), z.lazy(() => TenantRoleUncheckedUpdateManyWithoutSystemRoleTemplateInputObjectSchema)])
}).strict();
export const TenantRoleUpdateManyWithWhereWithoutSystemRoleTemplateInputObjectSchema: z.ZodType<Prisma.TenantRoleUpdateManyWithWhereWithoutSystemRoleTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUpdateManyWithWhereWithoutSystemRoleTemplateInput>;
export const TenantRoleUpdateManyWithWhereWithoutSystemRoleTemplateInputObjectZodSchema = makeSchema();
