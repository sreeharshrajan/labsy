import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleWhereUniqueInputObjectSchema } from './TenantRoleWhereUniqueInput.schema';
import { TenantRoleUpdateWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleUpdateWithoutSystemRoleTemplateInput.schema';
import { TenantRoleUncheckedUpdateWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleUncheckedUpdateWithoutSystemRoleTemplateInput.schema';
import { TenantRoleCreateWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleCreateWithoutSystemRoleTemplateInput.schema';
import { TenantRoleUncheckedCreateWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleUncheckedCreateWithoutSystemRoleTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantRoleWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TenantRoleUpdateWithoutSystemRoleTemplateInputObjectSchema), z.lazy(() => TenantRoleUncheckedUpdateWithoutSystemRoleTemplateInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantRoleCreateWithoutSystemRoleTemplateInputObjectSchema), z.lazy(() => TenantRoleUncheckedCreateWithoutSystemRoleTemplateInputObjectSchema)])
}).strict();
export const TenantRoleUpsertWithWhereUniqueWithoutSystemRoleTemplateInputObjectSchema: z.ZodType<Prisma.TenantRoleUpsertWithWhereUniqueWithoutSystemRoleTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUpsertWithWhereUniqueWithoutSystemRoleTemplateInput>;
export const TenantRoleUpsertWithWhereUniqueWithoutSystemRoleTemplateInputObjectZodSchema = makeSchema();
