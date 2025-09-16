import { z } from 'zod';
import { SystemPermissionSelectObjectSchema } from './objects/SystemPermissionSelect.schema';
import { SystemPermissionIncludeObjectSchema } from './objects/SystemPermissionInclude.schema';
import { SystemPermissionUpdateInputObjectSchema } from './objects/SystemPermissionUpdateInput.schema';
import { SystemPermissionUncheckedUpdateInputObjectSchema } from './objects/SystemPermissionUncheckedUpdateInput.schema';
import { SystemPermissionWhereUniqueInputObjectSchema } from './objects/SystemPermissionWhereUniqueInput.schema';

export const SystemPermissionUpdateOneSchema = z.object({ select: SystemPermissionSelectObjectSchema.optional(), include: SystemPermissionIncludeObjectSchema.optional(), data: z.union([SystemPermissionUpdateInputObjectSchema, SystemPermissionUncheckedUpdateInputObjectSchema]), where: SystemPermissionWhereUniqueInputObjectSchema  })