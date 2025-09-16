import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleWhereUniqueInputObjectSchema } from './TenantRoleWhereUniqueInput.schema';
import { TenantRoleCreateWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleCreateWithoutSystemRoleTemplateInput.schema';
import { TenantRoleUncheckedCreateWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleUncheckedCreateWithoutSystemRoleTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantRoleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantRoleCreateWithoutSystemRoleTemplateInputObjectSchema), z.lazy(() => TenantRoleUncheckedCreateWithoutSystemRoleTemplateInputObjectSchema)])
}).strict();
export const TenantRoleCreateOrConnectWithoutSystemRoleTemplateInputObjectSchema: z.ZodType<Prisma.TenantRoleCreateOrConnectWithoutSystemRoleTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCreateOrConnectWithoutSystemRoleTemplateInput>;
export const TenantRoleCreateOrConnectWithoutSystemRoleTemplateInputObjectZodSchema = makeSchema();
