import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorCommissionOrderByWithRelationInputObjectSchema } from './objects/DoctorCommissionOrderByWithRelationInput.schema';
import { DoctorCommissionWhereInputObjectSchema } from './objects/DoctorCommissionWhereInput.schema';
import { DoctorCommissionWhereUniqueInputObjectSchema } from './objects/DoctorCommissionWhereUniqueInput.schema';
import { DoctorCommissionCountAggregateInputObjectSchema } from './objects/DoctorCommissionCountAggregateInput.schema';

export const DoctorCommissionCountSchema: z.ZodType<Prisma.DoctorCommissionCountArgs> = z.object({ orderBy: z.union([DoctorCommissionOrderByWithRelationInputObjectSchema, DoctorCommissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorCommissionWhereInputObjectSchema.optional(), cursor: DoctorCommissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DoctorCommissionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DoctorCommissionCountArgs>;

export const DoctorCommissionCountZodSchema = z.object({ orderBy: z.union([DoctorCommissionOrderByWithRelationInputObjectSchema, DoctorCommissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorCommissionWhereInputObjectSchema.optional(), cursor: DoctorCommissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DoctorCommissionCountAggregateInputObjectSchema ]).optional() }).strict();