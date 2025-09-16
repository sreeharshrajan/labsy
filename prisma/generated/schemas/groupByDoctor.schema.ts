import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorWhereInputObjectSchema } from './objects/DoctorWhereInput.schema';
import { DoctorOrderByWithAggregationInputObjectSchema } from './objects/DoctorOrderByWithAggregationInput.schema';
import { DoctorScalarWhereWithAggregatesInputObjectSchema } from './objects/DoctorScalarWhereWithAggregatesInput.schema';
import { DoctorScalarFieldEnumSchema } from './enums/DoctorScalarFieldEnum.schema';
import { DoctorCountAggregateInputObjectSchema } from './objects/DoctorCountAggregateInput.schema';
import { DoctorMinAggregateInputObjectSchema } from './objects/DoctorMinAggregateInput.schema';
import { DoctorMaxAggregateInputObjectSchema } from './objects/DoctorMaxAggregateInput.schema';

export const DoctorGroupBySchema: z.ZodType<Prisma.DoctorGroupByArgs> = z.object({ where: DoctorWhereInputObjectSchema.optional(), orderBy: z.union([DoctorOrderByWithAggregationInputObjectSchema, DoctorOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DoctorScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DoctorScalarFieldEnumSchema), _count: z.union([ z.literal(true), DoctorCountAggregateInputObjectSchema ]).optional(), _min: DoctorMinAggregateInputObjectSchema.optional(), _max: DoctorMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DoctorGroupByArgs>;

export const DoctorGroupByZodSchema = z.object({ where: DoctorWhereInputObjectSchema.optional(), orderBy: z.union([DoctorOrderByWithAggregationInputObjectSchema, DoctorOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DoctorScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DoctorScalarFieldEnumSchema), _count: z.union([ z.literal(true), DoctorCountAggregateInputObjectSchema ]).optional(), _min: DoctorMinAggregateInputObjectSchema.optional(), _max: DoctorMaxAggregateInputObjectSchema.optional() }).strict();