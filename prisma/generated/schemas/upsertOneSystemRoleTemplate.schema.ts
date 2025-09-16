import { z } from 'zod';
import { SystemRoleTemplateSelectObjectSchema } from './objects/SystemRoleTemplateSelect.schema';
import { SystemRoleTemplateIncludeObjectSchema } from './objects/SystemRoleTemplateInclude.schema';
import { SystemRoleTemplateWhereUniqueInputObjectSchema } from './objects/SystemRoleTemplateWhereUniqueInput.schema';
import { SystemRoleTemplateCreateInputObjectSchema } from './objects/SystemRoleTemplateCreateInput.schema';
import { SystemRoleTemplateUncheckedCreateInputObjectSchema } from './objects/SystemRoleTemplateUncheckedCreateInput.schema';
import { SystemRoleTemplateUpdateInputObjectSchema } from './objects/SystemRoleTemplateUpdateInput.schema';
import { SystemRoleTemplateUncheckedUpdateInputObjectSchema } from './objects/SystemRoleTemplateUncheckedUpdateInput.schema';

export const SystemRoleTemplateUpsertSchema = z.object({ select: SystemRoleTemplateSelectObjectSchema.optional(), include: SystemRoleTemplateIncludeObjectSchema.optional(), where: SystemRoleTemplateWhereUniqueInputObjectSchema, create: z.union([ SystemRoleTemplateCreateInputObjectSchema, SystemRoleTemplateUncheckedCreateInputObjectSchema ]), update: z.union([ SystemRoleTemplateUpdateInputObjectSchema, SystemRoleTemplateUncheckedUpdateInputObjectSchema ])  })