import { z } from 'zod';
import { SystemPermissionSelectObjectSchema } from './objects/SystemPermissionSelect.schema';
import { SystemPermissionUpdateManyMutationInputObjectSchema } from './objects/SystemPermissionUpdateManyMutationInput.schema';
import { SystemPermissionWhereInputObjectSchema } from './objects/SystemPermissionWhereInput.schema';

export const SystemPermissionUpdateManyAndReturnSchema = z.object({ select: SystemPermissionSelectObjectSchema.optional(), data: SystemPermissionUpdateManyMutationInputObjectSchema, where: SystemPermissionWhereInputObjectSchema.optional()  }).strict()