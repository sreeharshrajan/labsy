import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorCommissionLogOrderByWithRelationInputObjectSchema } from './objects/DoctorCommissionLogOrderByWithRelationInput.schema';
import { DoctorCommissionLogWhereInputObjectSchema } from './objects/DoctorCommissionLogWhereInput.schema';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './objects/DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogCountAggregateInputObjectSchema } from './objects/DoctorCommissionLogCountAggregateInput.schema';

export const DoctorCommissionLogCountSchema: z.ZodType<Prisma.DoctorCommissionLogCountArgs> = z.object({ orderBy: z.union([DoctorCommissionLogOrderByWithRelationInputObjectSchema, DoctorCommissionLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorCommissionLogWhereInputObjectSchema.optional(), cursor: DoctorCommissionLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DoctorCommissionLogCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DoctorCommissionLogCountArgs>;

export const DoctorCommissionLogCountZodSchema = z.object({ orderBy: z.union([DoctorCommissionLogOrderByWithRelationInputObjectSchema, DoctorCommissionLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorCommissionLogWhereInputObjectSchema.optional(), cursor: DoctorCommissionLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DoctorCommissionLogCountAggregateInputObjectSchema ]).optional() }).strict();