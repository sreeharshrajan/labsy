import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  doctorId: z.literal(true).optional(),
  addressId: z.literal(true).optional(),
  isPrimary: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional()
}).strict();
export const DoctorAddressMinAggregateInputObjectSchema: z.ZodType<Prisma.DoctorAddressMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressMinAggregateInputType>;
export const DoctorAddressMinAggregateInputObjectZodSchema = makeSchema();
