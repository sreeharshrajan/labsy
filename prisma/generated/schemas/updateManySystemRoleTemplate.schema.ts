import { z } from 'zod';
import { SystemRoleTemplateUpdateManyMutationInputObjectSchema } from './objects/SystemRoleTemplateUpdateManyMutationInput.schema';
import { SystemRoleTemplateWhereInputObjectSchema } from './objects/SystemRoleTemplateWhereInput.schema';

export const SystemRoleTemplateUpdateManySchema = z.object({ data: SystemRoleTemplateUpdateManyMutationInputObjectSchema, where: SystemRoleTemplateWhereInputObjectSchema.optional()  })