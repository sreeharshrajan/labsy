import { z } from 'zod';
import { SystemPermissionSelectObjectSchema } from './objects/SystemPermissionSelect.schema';
import { SystemPermissionIncludeObjectSchema } from './objects/SystemPermissionInclude.schema';
import { SystemPermissionCreateInputObjectSchema } from './objects/SystemPermissionCreateInput.schema';
import { SystemPermissionUncheckedCreateInputObjectSchema } from './objects/SystemPermissionUncheckedCreateInput.schema';

export const SystemPermissionCreateOneSchema = z.object({ select: SystemPermissionSelectObjectSchema.optional(), include: SystemPermissionIncludeObjectSchema.optional(), data: z.union([SystemPermissionCreateInputObjectSchema, SystemPermissionUncheckedCreateInputObjectSchema])  })