import { z } from 'zod';
import { SystemRoleTemplateSelectObjectSchema } from './objects/SystemRoleTemplateSelect.schema';
import { SystemRoleTemplateCreateManyInputObjectSchema } from './objects/SystemRoleTemplateCreateManyInput.schema';

export const SystemRoleTemplateCreateManyAndReturnSchema = z.object({ select: SystemRoleTemplateSelectObjectSchema.optional(), data: z.union([ SystemRoleTemplateCreateManyInputObjectSchema, z.array(SystemRoleTemplateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()