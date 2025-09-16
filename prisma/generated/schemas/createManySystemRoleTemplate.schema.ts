import { z } from 'zod';
import { SystemRoleTemplateCreateManyInputObjectSchema } from './objects/SystemRoleTemplateCreateManyInput.schema';

export const SystemRoleTemplateCreateManySchema = z.object({ data: z.union([ SystemRoleTemplateCreateManyInputObjectSchema, z.array(SystemRoleTemplateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })