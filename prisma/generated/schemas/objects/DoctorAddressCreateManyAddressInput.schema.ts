import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  doctorId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const DoctorAddressCreateManyAddressInputObjectSchema: z.ZodType<Prisma.DoctorAddressCreateManyAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressCreateManyAddressInput>;
export const DoctorAddressCreateManyAddressInputObjectZodSchema = makeSchema();
