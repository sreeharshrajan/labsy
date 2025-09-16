import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorStatusSchema } from '../enums/DoctorStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  specialization: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  registrationNo: z.string().optional().nullable(),
  clinicName: z.string().optional().nullable(),
  department: z.string().optional().nullable(),
  status: DoctorStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const DoctorCreateManyTenantInputObjectSchema: z.ZodType<Prisma.DoctorCreateManyTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateManyTenantInput>;
export const DoctorCreateManyTenantInputObjectZodSchema = makeSchema();
