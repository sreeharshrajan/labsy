import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorAddressOrderByWithRelationInputObjectSchema } from './objects/DoctorAddressOrderByWithRelationInput.schema';
import { DoctorAddressWhereInputObjectSchema } from './objects/DoctorAddressWhereInput.schema';
import { DoctorAddressWhereUniqueInputObjectSchema } from './objects/DoctorAddressWhereUniqueInput.schema';
import { DoctorAddressCountAggregateInputObjectSchema } from './objects/DoctorAddressCountAggregateInput.schema';
import { DoctorAddressMinAggregateInputObjectSchema } from './objects/DoctorAddressMinAggregateInput.schema';
import { DoctorAddressMaxAggregateInputObjectSchema } from './objects/DoctorAddressMaxAggregateInput.schema';

export const DoctorAddressAggregateSchema: z.ZodType<Prisma.DoctorAddressAggregateArgs> = z.object({ orderBy: z.union([DoctorAddressOrderByWithRelationInputObjectSchema, DoctorAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorAddressWhereInputObjectSchema.optional(), cursor: DoctorAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DoctorAddressCountAggregateInputObjectSchema ]).optional(), _min: DoctorAddressMinAggregateInputObjectSchema.optional(), _max: DoctorAddressMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DoctorAddressAggregateArgs>;

export const DoctorAddressAggregateZodSchema = z.object({ orderBy: z.union([DoctorAddressOrderByWithRelationInputObjectSchema, DoctorAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorAddressWhereInputObjectSchema.optional(), cursor: DoctorAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DoctorAddressCountAggregateInputObjectSchema ]).optional(), _min: DoctorAddressMinAggregateInputObjectSchema.optional(), _max: DoctorAddressMaxAggregateInputObjectSchema.optional() }).strict();