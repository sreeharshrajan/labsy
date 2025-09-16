import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const DoctorAddressOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.DoctorAddressOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressOrderByRelationAggregateInput>;
export const DoctorAddressOrderByRelationAggregateInputObjectZodSchema = makeSchema();
