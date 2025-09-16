import { z } from 'zod';
import { SystemRoleTemplateSelectObjectSchema } from './objects/SystemRoleTemplateSelect.schema';
import { SystemRoleTemplateIncludeObjectSchema } from './objects/SystemRoleTemplateInclude.schema';
import { SystemRoleTemplateWhereUniqueInputObjectSchema } from './objects/SystemRoleTemplateWhereUniqueInput.schema';

export const SystemRoleTemplateDeleteOneSchema = z.object({ select: SystemRoleTemplateSelectObjectSchema.optional(), include: SystemRoleTemplateIncludeObjectSchema.optional(), where: SystemRoleTemplateWhereUniqueInputObjectSchema  })