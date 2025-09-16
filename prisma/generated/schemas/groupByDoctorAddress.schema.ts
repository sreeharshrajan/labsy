import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorAddressWhereInputObjectSchema } from './objects/DoctorAddressWhereInput.schema';
import { DoctorAddressOrderByWithAggregationInputObjectSchema } from './objects/DoctorAddressOrderByWithAggregationInput.schema';
import { DoctorAddressScalarWhereWithAggregatesInputObjectSchema } from './objects/DoctorAddressScalarWhereWithAggregatesInput.schema';
import { DoctorAddressScalarFieldEnumSchema } from './enums/DoctorAddressScalarFieldEnum.schema';
import { DoctorAddressCountAggregateInputObjectSchema } from './objects/DoctorAddressCountAggregateInput.schema';
import { DoctorAddressMinAggregateInputObjectSchema } from './objects/DoctorAddressMinAggregateInput.schema';
import { DoctorAddressMaxAggregateInputObjectSchema } from './objects/DoctorAddressMaxAggregateInput.schema';

export const DoctorAddressGroupBySchema: z.ZodType<Prisma.DoctorAddressGroupByArgs> = z.object({ where: DoctorAddressWhereInputObjectSchema.optional(), orderBy: z.union([DoctorAddressOrderByWithAggregationInputObjectSchema, DoctorAddressOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DoctorAddressScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DoctorAddressScalarFieldEnumSchema), _count: z.union([ z.literal(true), DoctorAddressCountAggregateInputObjectSchema ]).optional(), _min: DoctorAddressMinAggregateInputObjectSchema.optional(), _max: DoctorAddressMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DoctorAddressGroupByArgs>;

export const DoctorAddressGroupByZodSchema = z.object({ where: DoctorAddressWhereInputObjectSchema.optional(), orderBy: z.union([DoctorAddressOrderByWithAggregationInputObjectSchema, DoctorAddressOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DoctorAddressScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DoctorAddressScalarFieldEnumSchema), _count: z.union([ z.literal(true), DoctorAddressCountAggregateInputObjectSchema ]).optional(), _min: DoctorAddressMinAggregateInputObjectSchema.optional(), _max: DoctorAddressMaxAggregateInputObjectSchema.optional() }).strict();