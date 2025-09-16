import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SystemRoleTemplateSelectObjectSchema } from './objects/SystemRoleTemplateSelect.schema';
import { SystemRoleTemplateIncludeObjectSchema } from './objects/SystemRoleTemplateInclude.schema';
import { SystemRoleTemplateWhereUniqueInputObjectSchema } from './objects/SystemRoleTemplateWhereUniqueInput.schema';

export const SystemRoleTemplateFindUniqueOrThrowSchema: z.ZodType<Prisma.SystemRoleTemplateFindUniqueOrThrowArgs> = z.object({ select: SystemRoleTemplateSelectObjectSchema.optional(), include: SystemRoleTemplateIncludeObjectSchema.optional(), where: SystemRoleTemplateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SystemRoleTemplateFindUniqueOrThrowArgs>;

export const SystemRoleTemplateFindUniqueOrThrowZodSchema = z.object({ select: SystemRoleTemplateSelectObjectSchema.optional(), include: SystemRoleTemplateIncludeObjectSchema.optional(), where: SystemRoleTemplateWhereUniqueInputObjectSchema }).strict();