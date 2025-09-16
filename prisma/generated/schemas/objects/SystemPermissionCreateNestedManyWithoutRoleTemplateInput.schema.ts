import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemPermissionCreateWithoutRoleTemplateInputObjectSchema } from './SystemPermissionCreateWithoutRoleTemplateInput.schema';
import { SystemPermissionUncheckedCreateWithoutRoleTemplateInputObjectSchema } from './SystemPermissionUncheckedCreateWithoutRoleTemplateInput.schema';
import { SystemPermissionCreateOrConnectWithoutRoleTemplateInputObjectSchema } from './SystemPermissionCreateOrConnectWithoutRoleTemplateInput.schema';
import { SystemPermissionCreateManyRoleTemplateInputEnvelopeObjectSchema } from './SystemPermissionCreateManyRoleTemplateInputEnvelope.schema';
import { SystemPermissionWhereUniqueInputObjectSchema } from './SystemPermissionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SystemPermissionCreateWithoutRoleTemplateInputObjectSchema), z.lazy(() => SystemPermissionCreateWithoutRoleTemplateInputObjectSchema).array(), z.lazy(() => SystemPermissionUncheckedCreateWithoutRoleTemplateInputObjectSchema), z.lazy(() => SystemPermissionUncheckedCreateWithoutRoleTemplateInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SystemPermissionCreateOrConnectWithoutRoleTemplateInputObjectSchema), z.lazy(() => SystemPermissionCreateOrConnectWithoutRoleTemplateInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SystemPermissionCreateManyRoleTemplateInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SystemPermissionWhereUniqueInputObjectSchema), z.lazy(() => SystemPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SystemPermissionCreateNestedManyWithoutRoleTemplateInputObjectSchema: z.ZodType<Prisma.SystemPermissionCreateNestedManyWithoutRoleTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionCreateNestedManyWithoutRoleTemplateInput>;
export const SystemPermissionCreateNestedManyWithoutRoleTemplateInputObjectZodSchema = makeSchema();
