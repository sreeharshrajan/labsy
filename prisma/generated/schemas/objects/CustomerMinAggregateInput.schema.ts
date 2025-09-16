import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  name: z.literal(true).optional(),
  email: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  dateOfBirth: z.literal(true).optional(),
  gender: z.literal(true).optional(),
  bloodGroup: z.literal(true).optional(),
  maritalStatus: z.literal(true).optional(),
  aadharNumber: z.literal(true).optional(),
  panNumber: z.literal(true).optional(),
  passportNumber: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  tenantId: z.literal(true).optional()
}).strict();
export const CustomerMinAggregateInputObjectSchema: z.ZodType<Prisma.CustomerMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CustomerMinAggregateInputType>;
export const CustomerMinAggregateInputObjectZodSchema = makeSchema();
