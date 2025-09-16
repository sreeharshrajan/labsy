import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorCommissionPaymentOrderByWithRelationInputObjectSchema } from './objects/DoctorCommissionPaymentOrderByWithRelationInput.schema';
import { DoctorCommissionPaymentWhereInputObjectSchema } from './objects/DoctorCommissionPaymentWhereInput.schema';
import { DoctorCommissionPaymentWhereUniqueInputObjectSchema } from './objects/DoctorCommissionPaymentWhereUniqueInput.schema';
import { DoctorCommissionPaymentCountAggregateInputObjectSchema } from './objects/DoctorCommissionPaymentCountAggregateInput.schema';

export const DoctorCommissionPaymentCountSchema: z.ZodType<Prisma.DoctorCommissionPaymentCountArgs> = z.object({ orderBy: z.union([DoctorCommissionPaymentOrderByWithRelationInputObjectSchema, DoctorCommissionPaymentOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorCommissionPaymentWhereInputObjectSchema.optional(), cursor: DoctorCommissionPaymentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DoctorCommissionPaymentCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentCountArgs>;

export const DoctorCommissionPaymentCountZodSchema = z.object({ orderBy: z.union([DoctorCommissionPaymentOrderByWithRelationInputObjectSchema, DoctorCommissionPaymentOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorCommissionPaymentWhereInputObjectSchema.optional(), cursor: DoctorCommissionPaymentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DoctorCommissionPaymentCountAggregateInputObjectSchema ]).optional() }).strict();