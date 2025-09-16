import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorAddressOrderByWithRelationInputObjectSchema } from './objects/DoctorAddressOrderByWithRelationInput.schema';
import { DoctorAddressWhereInputObjectSchema } from './objects/DoctorAddressWhereInput.schema';
import { DoctorAddressWhereUniqueInputObjectSchema } from './objects/DoctorAddressWhereUniqueInput.schema';
import { DoctorAddressCountAggregateInputObjectSchema } from './objects/DoctorAddressCountAggregateInput.schema';

export const DoctorAddressCountSchema: z.ZodType<Prisma.DoctorAddressCountArgs> = z.object({ orderBy: z.union([DoctorAddressOrderByWithRelationInputObjectSchema, DoctorAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorAddressWhereInputObjectSchema.optional(), cursor: DoctorAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DoctorAddressCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DoctorAddressCountArgs>;

export const DoctorAddressCountZodSchema = z.object({ orderBy: z.union([DoctorAddressOrderByWithRelationInputObjectSchema, DoctorAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorAddressWhereInputObjectSchema.optional(), cursor: DoctorAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DoctorAddressCountAggregateInputObjectSchema ]).optional() }).strict();