import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemPermissionCreateWithoutRoleTemplateInputObjectSchema } from './SystemPermissionCreateWithoutRoleTemplateInput.schema';
import { SystemPermissionUncheckedCreateWithoutRoleTemplateInputObjectSchema } from './SystemPermissionUncheckedCreateWithoutRoleTemplateInput.schema';
import { SystemPermissionCreateOrConnectWithoutRoleTemplateInputObjectSchema } from './SystemPermissionCreateOrConnectWithoutRoleTemplateInput.schema';
import { SystemPermissionUpsertWithWhereUniqueWithoutRoleTemplateInputObjectSchema } from './SystemPermissionUpsertWithWhereUniqueWithoutRoleTemplateInput.schema';
import { SystemPermissionCreateManyRoleTemplateInputEnvelopeObjectSchema } from './SystemPermissionCreateManyRoleTemplateInputEnvelope.schema';
import { SystemPermissionWhereUniqueInputObjectSchema } from './SystemPermissionWhereUniqueInput.schema';
import { SystemPermissionUpdateWithWhereUniqueWithoutRoleTemplateInputObjectSchema } from './SystemPermissionUpdateWithWhereUniqueWithoutRoleTemplateInput.schema';
import { SystemPermissionUpdateManyWithWhereWithoutRoleTemplateInputObjectSchema } from './SystemPermissionUpdateManyWithWhereWithoutRoleTemplateInput.schema';
import { SystemPermissionScalarWhereInputObjectSchema } from './SystemPermissionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SystemPermissionCreateWithoutRoleTemplateInputObjectSchema), z.lazy(() => SystemPermissionCreateWithoutRoleTemplateInputObjectSchema).array(), z.lazy(() => SystemPermissionUncheckedCreateWithoutRoleTemplateInputObjectSchema), z.lazy(() => SystemPermissionUncheckedCreateWithoutRoleTemplateInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SystemPermissionCreateOrConnectWithoutRoleTemplateInputObjectSchema), z.lazy(() => SystemPermissionCreateOrConnectWithoutRoleTemplateInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SystemPermissionUpsertWithWhereUniqueWithoutRoleTemplateInputObjectSchema), z.lazy(() => SystemPermissionUpsertWithWhereUniqueWithoutRoleTemplateInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SystemPermissionCreateManyRoleTemplateInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SystemPermissionWhereUniqueInputObjectSchema), z.lazy(() => SystemPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SystemPermissionWhereUniqueInputObjectSchema), z.lazy(() => SystemPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SystemPermissionWhereUniqueInputObjectSchema), z.lazy(() => SystemPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SystemPermissionWhereUniqueInputObjectSchema), z.lazy(() => SystemPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SystemPermissionUpdateWithWhereUniqueWithoutRoleTemplateInputObjectSchema), z.lazy(() => SystemPermissionUpdateWithWhereUniqueWithoutRoleTemplateInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SystemPermissionUpdateManyWithWhereWithoutRoleTemplateInputObjectSchema), z.lazy(() => SystemPermissionUpdateManyWithWhereWithoutRoleTemplateInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SystemPermissionScalarWhereInputObjectSchema), z.lazy(() => SystemPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SystemPermissionUpdateManyWithoutRoleTemplateNestedInputObjectSchema: z.ZodType<Prisma.SystemPermissionUpdateManyWithoutRoleTemplateNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionUpdateManyWithoutRoleTemplateNestedInput>;
export const SystemPermissionUpdateManyWithoutRoleTemplateNestedInputObjectZodSchema = makeSchema();
