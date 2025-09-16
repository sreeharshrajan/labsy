import { z } from 'zod';
import { SystemRoleTemplateSelectObjectSchema } from './objects/SystemRoleTemplateSelect.schema';
import { SystemRoleTemplateIncludeObjectSchema } from './objects/SystemRoleTemplateInclude.schema';
import { SystemRoleTemplateCreateInputObjectSchema } from './objects/SystemRoleTemplateCreateInput.schema';
import { SystemRoleTemplateUncheckedCreateInputObjectSchema } from './objects/SystemRoleTemplateUncheckedCreateInput.schema';

export const SystemRoleTemplateCreateOneSchema = z.object({ select: SystemRoleTemplateSelectObjectSchema.optional(), include: SystemRoleTemplateIncludeObjectSchema.optional(), data: z.union([SystemRoleTemplateCreateInputObjectSchema, SystemRoleTemplateUncheckedCreateInputObjectSchema])  })