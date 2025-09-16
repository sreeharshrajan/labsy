import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SystemRoleTemplateSelectObjectSchema } from './objects/SystemRoleTemplateSelect.schema';
import { SystemRoleTemplateIncludeObjectSchema } from './objects/SystemRoleTemplateInclude.schema';
import { SystemRoleTemplateWhereUniqueInputObjectSchema } from './objects/SystemRoleTemplateWhereUniqueInput.schema';

export const SystemRoleTemplateFindUniqueSchema: z.ZodType<Prisma.SystemRoleTemplateFindUniqueArgs> = z.object({ select: SystemRoleTemplateSelectObjectSchema.optional(), include: SystemRoleTemplateIncludeObjectSchema.optional(), where: SystemRoleTemplateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SystemRoleTemplateFindUniqueArgs>;

export const SystemRoleTemplateFindUniqueZodSchema = z.object({ select: SystemRoleTemplateSelectObjectSchema.optional(), include: SystemRoleTemplateIncludeObjectSchema.optional(), where: SystemRoleTemplateWhereUniqueInputObjectSchema }).strict();