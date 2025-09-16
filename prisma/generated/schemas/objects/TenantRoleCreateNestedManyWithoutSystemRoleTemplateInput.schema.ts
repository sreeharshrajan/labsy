import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleCreateWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleCreateWithoutSystemRoleTemplateInput.schema';
import { TenantRoleUncheckedCreateWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleUncheckedCreateWithoutSystemRoleTemplateInput.schema';
import { TenantRoleCreateOrConnectWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleCreateOrConnectWithoutSystemRoleTemplateInput.schema';
import { TenantRoleCreateManySystemRoleTemplateInputEnvelopeObjectSchema } from './TenantRoleCreateManySystemRoleTemplateInputEnvelope.schema';
import { TenantRoleWhereUniqueInputObjectSchema } from './TenantRoleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantRoleCreateWithoutSystemRoleTemplateInputObjectSchema), z.lazy(() => TenantRoleCreateWithoutSystemRoleTemplateInputObjectSchema).array(), z.lazy(() => TenantRoleUncheckedCreateWithoutSystemRoleTemplateInputObjectSchema), z.lazy(() => TenantRoleUncheckedCreateWithoutSystemRoleTemplateInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantRoleCreateOrConnectWithoutSystemRoleTemplateInputObjectSchema), z.lazy(() => TenantRoleCreateOrConnectWithoutSystemRoleTemplateInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantRoleCreateManySystemRoleTemplateInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TenantRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantRoleWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TenantRoleCreateNestedManyWithoutSystemRoleTemplateInputObjectSchema: z.ZodType<Prisma.TenantRoleCreateNestedManyWithoutSystemRoleTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCreateNestedManyWithoutSystemRoleTemplateInput>;
export const TenantRoleCreateNestedManyWithoutSystemRoleTemplateInputObjectZodSchema = makeSchema();
