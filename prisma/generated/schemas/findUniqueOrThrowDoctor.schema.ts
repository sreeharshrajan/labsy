import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorSelectObjectSchema } from './objects/DoctorSelect.schema';
import { DoctorIncludeObjectSchema } from './objects/DoctorInclude.schema';
import { DoctorWhereUniqueInputObjectSchema } from './objects/DoctorWhereUniqueInput.schema';

export const DoctorFindUniqueOrThrowSchema: z.ZodType<Prisma.DoctorFindUniqueOrThrowArgs> = z.object({ select: DoctorSelectObjectSchema.optional(), include: DoctorIncludeObjectSchema.optional(), where: DoctorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DoctorFindUniqueOrThrowArgs>;

export const DoctorFindUniqueOrThrowZodSchema = z.object({ select: DoctorSelectObjectSchema.optional(), include: DoctorIncludeObjectSchema.optional(), where: DoctorWhereUniqueInputObjectSchema }).strict();