import { z } from 'zod';
import { SystemPermissionSelectObjectSchema } from './objects/SystemPermissionSelect.schema';
import { SystemPermissionIncludeObjectSchema } from './objects/SystemPermissionInclude.schema';
import { SystemPermissionWhereUniqueInputObjectSchema } from './objects/SystemPermissionWhereUniqueInput.schema';

export const SystemPermissionDeleteOneSchema = z.object({ select: SystemPermissionSelectObjectSchema.optional(), include: SystemPermissionIncludeObjectSchema.optional(), where: SystemPermissionWhereUniqueInputObjectSchema  })