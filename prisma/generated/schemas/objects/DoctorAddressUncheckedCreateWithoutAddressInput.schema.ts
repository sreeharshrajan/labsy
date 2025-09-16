import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  doctorId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const DoctorAddressUncheckedCreateWithoutAddressInputObjectSchema: z.ZodType<Prisma.DoctorAddressUncheckedCreateWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressUncheckedCreateWithoutAddressInput>;
export const DoctorAddressUncheckedCreateWithoutAddressInputObjectZodSchema = makeSchema();
