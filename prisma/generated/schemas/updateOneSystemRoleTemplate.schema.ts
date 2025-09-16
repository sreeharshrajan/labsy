import { z } from 'zod';
import { SystemRoleTemplateSelectObjectSchema } from './objects/SystemRoleTemplateSelect.schema';
import { SystemRoleTemplateIncludeObjectSchema } from './objects/SystemRoleTemplateInclude.schema';
import { SystemRoleTemplateUpdateInputObjectSchema } from './objects/SystemRoleTemplateUpdateInput.schema';
import { SystemRoleTemplateUncheckedUpdateInputObjectSchema } from './objects/SystemRoleTemplateUncheckedUpdateInput.schema';
import { SystemRoleTemplateWhereUniqueInputObjectSchema } from './objects/SystemRoleTemplateWhereUniqueInput.schema';

export const SystemRoleTemplateUpdateOneSchema = z.object({ select: SystemRoleTemplateSelectObjectSchema.optional(), include: SystemRoleTemplateIncludeObjectSchema.optional(), data: z.union([SystemRoleTemplateUpdateInputObjectSchema, SystemRoleTemplateUncheckedUpdateInputObjectSchema]), where: SystemRoleTemplateWhereUniqueInputObjectSchema  })