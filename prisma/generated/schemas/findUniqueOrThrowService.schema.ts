import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ServiceSelectObjectSchema } from './objects/ServiceSelect.schema';
import { ServiceIncludeObjectSchema } from './objects/ServiceInclude.schema';
import { ServiceWhereUniqueInputObjectSchema } from './objects/ServiceWhereUniqueInput.schema';

export const ServiceFindUniqueOrThrowSchema: z.ZodType<Prisma.ServiceFindUniqueOrThrowArgs> = z.object({ select: ServiceSelectObjectSchema.optional(), include: ServiceIncludeObjectSchema.optional(), where: ServiceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ServiceFindUniqueOrThrowArgs>;

export const ServiceFindUniqueOrThrowZodSchema = z.object({ select: ServiceSelectObjectSchema.optional(), include: ServiceIncludeObjectSchema.optional(), where: ServiceWhereUniqueInputObjectSchema }).strict();