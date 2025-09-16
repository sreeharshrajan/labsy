import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleWhereUniqueInputObjectSchema } from './TenantRoleWhereUniqueInput.schema';
import { TenantRoleUpdateWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleUpdateWithoutSystemRoleTemplateInput.schema';
import { TenantRoleUncheckedUpdateWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleUncheckedUpdateWithoutSystemRoleTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantRoleWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TenantRoleUpdateWithoutSystemRoleTemplateInputObjectSchema), z.lazy(() => TenantRoleUncheckedUpdateWithoutSystemRoleTemplateInputObjectSchema)])
}).strict();
export const TenantRoleUpdateWithWhereUniqueWithoutSystemRoleTemplateInputObjectSchema: z.ZodType<Prisma.TenantRoleUpdateWithWhereUniqueWithoutSystemRoleTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUpdateWithWhereUniqueWithoutSystemRoleTemplateInput>;
export const TenantRoleUpdateWithWhereUniqueWithoutSystemRoleTemplateInputObjectZodSchema = makeSchema();
