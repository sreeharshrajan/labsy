import { z } from 'zod';
import { SystemRoleTemplateSelectObjectSchema } from './objects/SystemRoleTemplateSelect.schema';
import { SystemRoleTemplateUpdateManyMutationInputObjectSchema } from './objects/SystemRoleTemplateUpdateManyMutationInput.schema';
import { SystemRoleTemplateWhereInputObjectSchema } from './objects/SystemRoleTemplateWhereInput.schema';

export const SystemRoleTemplateUpdateManyAndReturnSchema = z.object({ select: SystemRoleTemplateSelectObjectSchema.optional(), data: SystemRoleTemplateUpdateManyMutationInputObjectSchema, where: SystemRoleTemplateWhereInputObjectSchema.optional()  }).strict()