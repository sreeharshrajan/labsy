import { z } from 'zod';
import { SystemPermissionSelectObjectSchema } from './objects/SystemPermissionSelect.schema';
import { SystemPermissionIncludeObjectSchema } from './objects/SystemPermissionInclude.schema';
import { SystemPermissionWhereUniqueInputObjectSchema } from './objects/SystemPermissionWhereUniqueInput.schema';
import { SystemPermissionCreateInputObjectSchema } from './objects/SystemPermissionCreateInput.schema';
import { SystemPermissionUncheckedCreateInputObjectSchema } from './objects/SystemPermissionUncheckedCreateInput.schema';
import { SystemPermissionUpdateInputObjectSchema } from './objects/SystemPermissionUpdateInput.schema';
import { SystemPermissionUncheckedUpdateInputObjectSchema } from './objects/SystemPermissionUncheckedUpdateInput.schema';

export const SystemPermissionUpsertSchema = z.object({ select: SystemPermissionSelectObjectSchema.optional(), include: SystemPermissionIncludeObjectSchema.optional(), where: SystemPermissionWhereUniqueInputObjectSchema, create: z.union([ SystemPermissionCreateInputObjectSchema, SystemPermissionUncheckedCreateInputObjectSchema ]), update: z.union([ SystemPermissionUpdateInputObjectSchema, SystemPermissionUncheckedUpdateInputObjectSchema ])  })