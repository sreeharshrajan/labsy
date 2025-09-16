import { z } from 'zod';
import { SystemRoleTemplateWhereInputObjectSchema } from './objects/SystemRoleTemplateWhereInput.schema';

export const SystemRoleTemplateDeleteManySchema = z.object({ where: SystemRoleTemplateWhereInputObjectSchema.optional()  })