import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  addressId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const DoctorAddressCreateManyDoctorInputObjectSchema: z.ZodType<Prisma.DoctorAddressCreateManyDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressCreateManyDoctorInput>;
export const DoctorAddressCreateManyDoctorInputObjectZodSchema = makeSchema();
