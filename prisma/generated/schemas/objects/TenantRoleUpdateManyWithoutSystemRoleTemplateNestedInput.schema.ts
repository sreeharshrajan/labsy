import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleCreateWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleCreateWithoutSystemRoleTemplateInput.schema';
import { TenantRoleUncheckedCreateWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleUncheckedCreateWithoutSystemRoleTemplateInput.schema';
import { TenantRoleCreateOrConnectWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleCreateOrConnectWithoutSystemRoleTemplateInput.schema';
import { TenantRoleUpsertWithWhereUniqueWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleUpsertWithWhereUniqueWithoutSystemRoleTemplateInput.schema';
import { TenantRoleCreateManySystemRoleTemplateInputEnvelopeObjectSchema } from './TenantRoleCreateManySystemRoleTemplateInputEnvelope.schema';
import { TenantRoleWhereUniqueInputObjectSchema } from './TenantRoleWhereUniqueInput.schema';
import { TenantRoleUpdateWithWhereUniqueWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleUpdateWithWhereUniqueWithoutSystemRoleTemplateInput.schema';
import { TenantRoleUpdateManyWithWhereWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleUpdateManyWithWhereWithoutSystemRoleTemplateInput.schema';
import { TenantRoleScalarWhereInputObjectSchema } from './TenantRoleScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantRoleCreateWithoutSystemRoleTemplateInputObjectSchema), z.lazy(() => TenantRoleCreateWithoutSystemRoleTemplateInputObjectSchema).array(), z.lazy(() => TenantRoleUncheckedCreateWithoutSystemRoleTemplateInputObjectSchema), z.lazy(() => TenantRoleUncheckedCreateWithoutSystemRoleTemplateInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantRoleCreateOrConnectWithoutSystemRoleTemplateInputObjectSchema), z.lazy(() => TenantRoleCreateOrConnectWithoutSystemRoleTemplateInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TenantRoleUpsertWithWhereUniqueWithoutSystemRoleTemplateInputObjectSchema), z.lazy(() => TenantRoleUpsertWithWhereUniqueWithoutSystemRoleTemplateInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantRoleCreateManySystemRoleTemplateInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TenantRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantRoleWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TenantRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantRoleWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TenantRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantRoleWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TenantRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantRoleWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TenantRoleUpdateWithWhereUniqueWithoutSystemRoleTemplateInputObjectSchema), z.lazy(() => TenantRoleUpdateWithWhereUniqueWithoutSystemRoleTemplateInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TenantRoleUpdateManyWithWhereWithoutSystemRoleTemplateInputObjectSchema), z.lazy(() => TenantRoleUpdateManyWithWhereWithoutSystemRoleTemplateInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TenantRoleScalarWhereInputObjectSchema), z.lazy(() => TenantRoleScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TenantRoleUpdateManyWithoutSystemRoleTemplateNestedInputObjectSchema: z.ZodType<Prisma.TenantRoleUpdateManyWithoutSystemRoleTemplateNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUpdateManyWithoutSystemRoleTemplateNestedInput>;
export const TenantRoleUpdateManyWithoutSystemRoleTemplateNestedInputObjectZodSchema = makeSchema();
